import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const AI_GATEWAY_URL = 'https://ai.gateway.lovable.dev/v1/chat/completions';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const lovableApiKey = Deno.env.get('LOVABLE_API_KEY');
    if (!lovableApiKey) throw new Error('LOVABLE_API_KEY not configured');

    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    if (!supabaseUrl || !supabaseServiceKey) throw new Error('Supabase credentials not configured');

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get the latest scraped markdown for each source
    const { data: scrapedRows, error } = await supabase
      .from('scraped_data')
      .select('*')
      .order('scraped_at', { ascending: false });

    if (error) throw error;

    // Get unique latest entries per source_key
    const latestBySource: Record<string, any> = {};
    for (const row of scrapedRows || []) {
      if (!latestBySource[row.source_key]) {
        latestBySource[row.source_key] = row;
      }
    }

    const results: Record<string, any> = {};

    for (const [sourceKey, row] of Object.entries(latestBySource)) {
      const markdown = row.data?.markdown;
      if (!markdown) {
        results[sourceKey] = { skipped: true, reason: 'no markdown' };
        continue;
      }

      console.log(`Extracting structured data from ${sourceKey}`);

      const systemPrompt = `You are a data extraction assistant. Extract structured JSON data from the given markdown content. Return ONLY valid JSON, no markdown formatting or explanations.`;

      let userPrompt = '';
      if (sourceKey === 'bankruptcy_stats') {
        userPrompt = `Extract US bankruptcy filing statistics from this content. Return JSON with this structure:
{
  "yearly": { "total": number, "consumer": number, "commercial": number, "ch7": number, "ch11": number, "ch13": number, "year": string, "yoyChange": string },
  "latestMonth": { "month": string, "total": number, "consumer": number, "commercial": number },
  "headlines": [{ "title": string, "date": string, "summary": string }]
}
Content: ${markdown.substring(0, 4000)}`;
      } else if (sourceKey === 'foreign_travel') {
        userPrompt = `Extract international travel statistics to the US from this content. Return JSON:
{
  "latestMonth": { "month": string, "totalArrivals": number, "nonCitizenArrivals": number, "yoyChange": string },
  "regionBreakdown": [{ "region": string, "passengers": string, "yoyChange": string }],
  "prePandemicRecovery": string,
  "headlines": [{ "title": string, "summary": string }]
}
Content: ${markdown.substring(0, 4000)}`;
      } else if (sourceKey === 'current_events') {
        userPrompt = `Extract the latest Trump administration news headlines. Return JSON:
{
  "headlines": [{ "title": string, "date": string, "summary": string, "category": string, "url": string }]
}
Limit to 10 most recent. Content: ${markdown.substring(0, 4000)}`;
      } else if (sourceKey === 'market_data') {
        userPrompt = `Extract market index data. Return JSON:
{
  "indices": [{ "name": string, "value": number, "dailyChange": string, "weeklyChange": string }],
  "timestamp": string
}
Content: ${markdown.substring(0, 4000)}`;
      } else {
        results[sourceKey] = { skipped: true, reason: 'unknown source' };
        continue;
      }

      try {
        const aiResponse = await fetch(AI_GATEWAY_URL, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${lovableApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'google/gemini-2.5-flash-lite',
            messages: [
              { role: 'system', content: systemPrompt },
              { role: 'user', content: userPrompt },
            ],
            temperature: 0.1,
          }),
        });

        const aiData = await aiResponse.json();
        const content = aiData.choices?.[0]?.message?.content || '';

        // Parse JSON from AI response (handle possible markdown wrapping)
        let parsed;
        try {
          const jsonStr = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
          parsed = JSON.parse(jsonStr);
        } catch {
          console.error(`Failed to parse AI response for ${sourceKey}:`, content.substring(0, 200));
          results[sourceKey] = { error: 'Failed to parse AI extraction' };
          continue;
        }

        // Store extracted structured data
        const { error: insertError } = await supabase
          .from('scraped_data')
          .insert({
            source_key: `${sourceKey}_structured`,
            data: parsed,
            source_url: row.source_url,
            scraped_at: new Date().toISOString(),
          });

        if (insertError) {
          results[sourceKey] = { error: insertError.message };
        } else {
          results[sourceKey] = { success: true };
        }
      } catch (aiErr) {
        console.error(`AI extraction error for ${sourceKey}:`, aiErr);
        results[sourceKey] = { error: aiErr instanceof Error ? aiErr.message : 'AI error' };
      }
    }

    return new Response(
      JSON.stringify({ success: true, results }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Extract function error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
