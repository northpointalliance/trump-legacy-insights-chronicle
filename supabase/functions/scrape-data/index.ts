import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

interface ScrapeTarget {
  sourceKey: string;
  url: string;
  prompt: string;
}

const SCRAPE_TARGETS: ScrapeTarget[] = [
  {
    sourceKey: 'bankruptcy_stats',
    url: 'https://www.epiqglobal.com/en-us/resource-center/news',
    prompt: 'Extract the latest US bankruptcy filing statistics including total filings, consumer filings, commercial filings, Chapter 7, Chapter 11, Chapter 13 numbers, and year-over-year percentage changes. Include monthly and annual data.',
  },
  {
    sourceKey: 'foreign_travel',
    url: 'https://www.trade.gov/feature-article/december-2025-international-air-passenger-travel',
    prompt: 'Extract international air passenger travel statistics to the United States including total arrivals, non-citizen arrivals, year-over-year changes, regional breakdowns by country, and pre-pandemic recovery percentages.',
  },
  {
    sourceKey: 'current_events',
    url: 'https://www.cnbc.com/politics/',
    prompt: 'Extract the latest headlines and summaries about Trump administration policies, executive orders, tariffs, and political developments. Include dates, titles, and brief descriptions.',
  },
  {
    sourceKey: 'market_data',
    url: 'https://www.cnbc.com/markets/',
    prompt: 'Extract current market data including S&P 500, Dow Jones, NASDAQ values and their daily/weekly/monthly percentage changes.',
  },
];

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const firecrawlApiKey = Deno.env.get('FIRECRAWL_API_KEY');
    if (!firecrawlApiKey) {
      throw new Error('FIRECRAWL_API_KEY not configured');
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error('Supabase credentials not configured');
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Parse optional body to scrape specific sources
    let targetKeys: string[] | null = null;
    try {
      const body = await req.json();
      if (body?.sources && Array.isArray(body.sources)) {
        targetKeys = body.sources;
      }
    } catch {
      // No body = scrape all
    }

    const targets = targetKeys
      ? SCRAPE_TARGETS.filter(t => targetKeys!.includes(t.sourceKey))
      : SCRAPE_TARGETS;

    const results: Record<string, any> = {};

    for (const target of targets) {
      try {
        console.log(`Scraping ${target.sourceKey} from ${target.url}`);

        const scrapeResponse = await fetch('https://api.firecrawl.dev/v1/scrape', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${firecrawlApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            url: target.url,
            formats: ['markdown'],
            onlyMainContent: true,
          }),
        });

        const scrapeData = await scrapeResponse.json();

        if (!scrapeResponse.ok) {
          console.error(`Firecrawl error for ${target.sourceKey}:`, scrapeData);
          results[target.sourceKey] = { error: scrapeData.error || 'Scrape failed' };
          continue;
        }

        // Extract the JSON data from the scrape
        const extractedData = {
          markdown: scrapeData.data?.markdown || scrapeData.markdown,
          metadata: scrapeData.data?.metadata || scrapeData.metadata,
          scrapedFrom: target.url,
          extractionPrompt: target.prompt,
        };

        // Store in database
        const { error: insertError } = await supabase
          .from('scraped_data')
          .insert({
            source_key: target.sourceKey,
            data: extractedData,
            source_url: target.url,
            scraped_at: new Date().toISOString(),
          });

        if (insertError) {
          console.error(`DB insert error for ${target.sourceKey}:`, insertError);
          results[target.sourceKey] = { error: insertError.message };
        } else {
          console.log(`Successfully scraped and stored ${target.sourceKey}`);
          results[target.sourceKey] = { success: true, dataKeys: Object.keys(extractedData || {}) };
        }
      } catch (err) {
        console.error(`Error processing ${target.sourceKey}:`, err);
        results[target.sourceKey] = { error: err instanceof Error ? err.message : 'Unknown error' };
      }
    }

    return new Response(
      JSON.stringify({ success: true, results, scrapedAt: new Date().toISOString() }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Scrape function error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
