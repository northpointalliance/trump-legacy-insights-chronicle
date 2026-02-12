import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface ScrapedDataRow {
  id: string;
  source_key: string;
  data: any;
  scraped_at: string;
  source_url: string | null;
  created_at: string;
}

/**
 * Fetch the latest scraped data for a given source key.
 * Returns the most recent entry, or null if none exists.
 */
export function useScrapedData(sourceKey: string) {
  return useQuery({
    queryKey: ['scraped-data', sourceKey],
    queryFn: async (): Promise<ScrapedDataRow | null> => {
      const { data, error } = await supabase
        .from('scraped_data')
        .select('*')
        .eq('source_key', sourceKey)
        .order('scraped_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error(`Error fetching scraped data for ${sourceKey}:`, error);
        throw error;
      }

      return data as ScrapedDataRow | null;
    },
    staleTime: 1000 * 60 * 30, // 30 minutes
    refetchOnWindowFocus: false,
  });
}

/**
 * Trigger a manual scrape for specific sources (or all).
 */
export async function triggerScrape(sources?: string[]) {
  const { data, error } = await supabase.functions.invoke('scrape-data', {
    body: sources ? { sources } : {},
  });

  if (error) throw error;
  return data;
}
