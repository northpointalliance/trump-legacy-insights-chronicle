import React from 'react';
import { DollarSign, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { marketReactionsByTerm, termSummaries, PresidentialTerm } from '@/data/marketData';
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
  term?: PresidentialTerm;
}

const termCopy: Record<PresidentialTerm, {
  title: string;
  description: string;
  crossLink: { to: string; label: string };
}> = {
  first: {
    title: 'Market Impact Analysis — First Term (2017–2021)',
    description: 'How markets reacted to key decisions of the first Trump presidency',
    crossLink: { to: '/#market-impact', label: 'Compare with the second term (2025– ) →' }
  },
  second: {
    title: 'Market Impact Analysis — Second Term (2025– )',
    description: 'How markets reacted to key decisions of the second Trump presidency',
    crossLink: { to: '/first-presidency#market-impact', label: 'Compare with the first term (2017–2021) →' }
  }
};

const MarketImpact: React.FC<MarketImpactProps> = ({ className, term = 'second' }) => {
  const copy = termCopy[term];
  const summary = termSummaries[term];

  const marketData = marketReactionsByTerm[term].map(reaction => ({
    id: reaction.id,
    name: reaction.event,
    detail: reaction.detail,
    window: reaction.window,
    // Several events fall in the same month, so the axis label needs the day.
    date: new Date(`${reaction.date}T00:00:00`).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: '2-digit'
    }),
    stockMarket: reaction.stockMarket.percentChange,
    dollarIndex: reaction.dollarIndex.percentChange,
    treasuryYield: reaction.treasuryYield.change
  }));

  const renderMarketCard = (title: string, value: number) => {
    const unit = title.includes('Treasury') ? 'bp' : '%';
    const Icon = value === 0 ? Minus : value > 0 ? TrendingUp : TrendingDown;
    const iconClass = value === 0
      ? 'text-gray-400'
      : value > 0
        ? 'text-green-500'
        : 'text-trump-red';

    return (
      <div className="bg-white p-4 rounded-lg shadow-sm border flex flex-col">
        <h4 className="font-medium text-gray-700 mb-2">{title}</h4>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            <Icon className={cn('h-5 w-5 mr-1', iconClass)} />
            <span className={value >= 0 ? 'market-up' : 'market-down'}>
              {value > 0 ? '+' : ''}{value}{unit}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Card className={cn('w-full', className)} id="market-impact">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center">
          <DollarSign className="mr-2 h-6 w-6 text-trump-blue" />
          {copy.title}
        </CardTitle>
        <CardDescription>{copy.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {marketData.length === 0 ? (
          <p className="text-gray-600">
            Market reaction data for this term is being compiled.
          </p>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {summary.stats.map((stat) => (
                  <div key={stat.label} className="bg-white p-4 rounded-lg shadow-sm border">
                    <div className="text-sm text-gray-500">{stat.label}</div>
                    <div
                      className={cn(
                        'text-2xl font-bold',
                        stat.value.startsWith('-') ? 'text-trump-red' : 'text-green-600'
                      )}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.detail}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-3">{summary.note}</p>
              <p className="text-xs text-muted-foreground mt-1">
                Term to date: {summary.window}.
              </p>
            </div>

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
                    name="Dow Change (%)"
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
                  <h3 className="font-semibold mb-1">{reaction.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{reaction.detail}</p>
                  <div className="grid grid-cols-3 gap-2">
                    {renderMarketCard('Stock Market', reaction.stockMarket)}
                    {renderMarketCard('Dollar Index', reaction.dollarIndex)}
                    {renderMarketCard('Treasury Yield', reaction.treasuryYield)}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">{reaction.window}</p>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 text-sm text-muted-foreground space-y-2">
              <p>
                Stock market figures are Dow Jones Industrial Average closing levels and Treasury
                figures are the 10-year constant maturity yield, both from the St. Louis Fed (FRED
                series DJIA and DGS10). Dollar figures are the ICE U.S. Dollar Index. All moves are
                close-to-close over the window noted on each card; where an announcement landed on
                a weekend, a holiday, or after the closing bell, the "before" figure is the last
                close ahead of it.
              </p>
              <p>
                <Link to={copy.crossLink.to} className="text-trump-blue hover:text-trump-red">
                  {copy.crossLink.label}
                </Link>
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MarketImpact;
