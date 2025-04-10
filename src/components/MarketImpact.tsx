
import React from 'react';
import { DollarSign, TrendingUp, TrendingDown, Percent } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { marketReactions } from '@/data/marketData';
import { firstTermEvents } from '@/data/presidencyEvents';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend 
} from 'recharts';

interface MarketImpactProps {
  className?: string;
}

const MarketImpact: React.FC<MarketImpactProps> = ({ className }) => {
  // Join market data with event titles
  const marketData = marketReactions.map(reaction => {
    const event = firstTermEvents.find(e => e.id === reaction.eventId);
    return {
      name: event?.title || 'Unknown Event',
      date: new Date(reaction.date).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
      }),
      stockMarket: reaction.stockMarket.percentChange,
      dollarIndex: reaction.dollarIndex.percentChange,
      treasuryYield: reaction.treasuryYield.change,
      id: reaction.id
    };
  });

  const renderMarketCard = (title: string, data: any) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-sm border flex flex-col">
        <h3 className="font-medium text-gray-700 mb-2">{title}</h3>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            {data > 0 ? (
              <TrendingUp className="h-5 w-5 text-green-500 mr-1" />
            ) : (
              <TrendingDown className="h-5 w-5 text-trump-red mr-1" />
            )}
            <span className={data > 0 ? "market-up" : "market-down"}>
              {data > 0 ? "+" : ""}{data}
              {title.includes("Treasury") ? "bp" : "%"}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Card className={cn("w-full", className)} id="market-impact">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center">
          <DollarSign className="mr-2 h-6 w-6 text-trump-blue" />
          Market Impact Analysis
        </CardTitle>
        <CardDescription>
          How markets reacted to key presidential decisions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={marketData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="stockMarket" 
                  name="Stock Market Change (%)" 
                  stroke="#3C3B6E" 
                  activeDot={{ r: 8 }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="dollarIndex" 
                  name="Dollar Index Change (%)" 
                  stroke="#B22234" 
                />
                <Line 
                  type="monotone" 
                  dataKey="treasuryYield" 
                  name="Treasury Yield Change (bp)" 
                  stroke="#008000" 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {marketData.map((reaction) => (
              <div 
                key={reaction.id} 
                className="bg-white p-4 rounded-lg shadow-sm border"
              >
                <p className="text-sm text-gray-500">{reaction.date}</p>
                <h3 className="font-semibold mb-3">{reaction.name}</h3>
                <div className="grid grid-cols-3 gap-2">
                  {renderMarketCard("Stock Market", reaction.stockMarket)}
                  {renderMarketCard("Dollar Index", reaction.dollarIndex)}
                  {renderMarketCard("Treasury Yield", reaction.treasuryYield)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketImpact;
