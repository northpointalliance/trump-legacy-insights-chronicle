import React from 'react';
import { useScrapedData, triggerScrape } from '@/hooks/useScrapedData';
import { Button } from '@/components/ui/button';
import { RefreshCw, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DataFreshnessIndicator: React.FC = () => {
  const { toast } = useToast();
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  
  const { data: bankruptcyData } = useScrapedData('bankruptcy_stats');
  const { data: travelData } = useScrapedData('foreign_travel');
  const { data: eventsData } = useScrapedData('current_events');
  const { data: marketData } = useScrapedData('market_data');

  const sources = [
    { key: 'Bankruptcy Stats', data: bankruptcyData },
    { key: 'Foreign Travel', data: travelData },
    { key: 'Current Events', data: eventsData },
    { key: 'Market Data', data: marketData },
  ];

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await triggerScrape();
      toast({ title: 'Scrape triggered', description: 'Data sources are being refreshed. This may take a minute.' });
    } catch (err) {
      toast({ title: 'Error', description: 'Failed to trigger data refresh.', variant: 'destructive' });
    } finally {
      setIsRefreshing(false);
    }
  };

  const formatAge = (dateStr: string) => {
    const hours = Math.floor((Date.now() - new Date(dateStr).getTime()) / (1000 * 60 * 60));
    if (hours < 1) return 'Just now';
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg border p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-trump-blue flex items-center gap-1">
          <Clock className="h-4 w-4" /> Data Freshness
        </h3>
        <Button
          variant="outline"
          size="sm"
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="text-xs"
        >
          <RefreshCw className={`h-3 w-3 mr-1 ${isRefreshing ? 'animate-spin' : ''}`} />
          {isRefreshing ? 'Refreshing...' : 'Refresh All'}
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {sources.map(({ key, data }) => (
          <div key={key} className="flex items-center gap-1 text-xs">
            {data ? (
              <CheckCircle className="h-3 w-3 text-green-500 shrink-0" />
            ) : (
              <AlertCircle className="h-3 w-3 text-muted-foreground shrink-0" />
            )}
            <span className="text-muted-foreground">{key}:</span>
            <span className="font-medium">
              {data ? formatAge(data.scraped_at) : 'Not yet'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFreshnessIndicator;
