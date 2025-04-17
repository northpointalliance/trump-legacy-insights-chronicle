
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowDownRight, Info } from 'lucide-react';
import { ChartContainer } from '@/components/ui/chart';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const travelData = [
  { month: 'Nov 2024', visitors: 5.8 },
  { month: 'Dec 2024', visitors: 5.3 },
  { month: 'Jan 2025', visitors: 4.9 },
  { month: 'Feb 2025', visitors: 4.7 },
  { month: 'Mar 2025', visitors: 4.3 },
  { month: 'Apr 2025', visitors: 4.0 },
];

const ForeignTravelersData = () => {
  // Calculate percentage decrease from first to last month
  const firstMonth = travelData[0].visitors;
  const lastMonth = travelData[travelData.length - 1].visitors;
  const percentageDecrease = ((firstMonth - lastMonth) / firstMonth * 100).toFixed(1);

  // Chart configuration
  const chartConfig = {
    visitors: {
      label: 'Foreign Visitors (millions)',
      color: '#ef4444',
    },
  };

  return (
    <section id="foreign-travelers" className="py-8">
      <h2 className="text-3xl font-bold text-trump-blue mb-6">Foreign Travel Decline</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Foreign Visitors Decline
              <ArrowDownRight className="h-5 w-5 text-red-500" />
            </CardTitle>
            <CardDescription>
              Tracking international arrivals to the United States
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="text-4xl font-bold text-red-500">{percentageDecrease}%</div>
                <p className="text-sm text-muted-foreground">Decrease in the last 6 months</p>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium">Current monthly visitors</p>
                    <p className="text-2xl font-bold">{lastMonth} million</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Previous high</p>
                    <p className="text-2xl font-bold">{firstMonth} million</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <Info className="h-4 w-4 mr-1" />
                <span>Data as of April 17, 2025</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Monthly Trend</CardTitle>
            <CardDescription>
              International visitor arrivals to the United States (in millions)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer config={chartConfig}>
                <AreaChart data={travelData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[3.5, 6]} />
                  <Tooltip 
                    formatter={(value) => [`${value} million`, 'Visitors']}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="visitors" 
                    name="visitors"
                    stroke="#ef4444" 
                    fill="#ef4444" 
                    fillOpacity={0.2} 
                  />
                </AreaChart>
              </ChartContainer>
            </div>
            
            <div className="mt-4 bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                Recent data shows a significant decline in foreign visitors to the United States, with a {percentageDecrease}% decrease 
                over the past six months. Travel industry analysts attribute this to a combination of stricter 
                visa policies, international tensions, and economic factors affecting global tourism patterns.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ForeignTravelersData;
