
-- Table to store scraped data snapshots from various sources
CREATE TABLE public.scraped_data (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  source_key TEXT NOT NULL, -- e.g. 'bankruptcy_monthly', 'foreign_travel', 'market_impact', 'current_events'
  data JSONB NOT NULL,
  scraped_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  source_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Index for quick lookups by source
CREATE INDEX idx_scraped_data_source_key ON public.scraped_data (source_key);
CREATE INDEX idx_scraped_data_scraped_at ON public.scraped_data (scraped_at DESC);

-- Enable RLS (public read, no public write)
ALTER TABLE public.scraped_data ENABLE ROW LEVEL SECURITY;

-- Anyone can read scraped data (it's a public informational site)
CREATE POLICY "Scraped data is publicly readable"
ON public.scraped_data
FOR SELECT
USING (true);

-- Only service role can insert/update (edge functions use service role)
-- No insert/update/delete policies for anon = blocked by default with RLS enabled

-- Enable pg_cron and pg_net extensions for scheduled scraping
CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA pg_catalog;
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;
