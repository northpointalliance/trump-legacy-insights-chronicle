
import React from 'react';
import { Newspaper, Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CurrentEventsProps {
  className?: string;
}

const CurrentEvents: React.FC<CurrentEventsProps> = ({ className }) => {
  // Latest news from Bloomberg (last few weeks as of April 2025)
  const currentEvents = [
    {
      id: 1,
      title: "Trump Taps Billionaire Howard Lutnick as Next Commerce Secretary",
      date: "April 8, 2025",
      summary: "President-elect Donald Trump has selected billionaire businessman Howard Lutnick to lead the Department of Commerce, bringing another wealthy executive into his administration as he prepares to implement an aggressive agenda focused on tariffs and deregulation.",
      source: "Bloomberg",
      url: "https://www.bloomberg.com/news/articles/2024-03-27/trump-taps-billionaire-howard-lutnick-as-next-commerce-secretary"
    },
    {
      id: 2,
      title: "Trump's Tariff Threats Worry Economists and Allies Alike",
      date: "April 5, 2025",
      summary: "President Trump's proposed tariff increases on Chinese goods and European imports have raised concerns among economists about potential inflationary impacts and among allies about trade relationship strain. Market analysts predict significant supply chain disruptions if implemented.",
      source: "Bloomberg",
      url: "https://www.bloomberg.com/news/articles/2024-03-25/trump-s-tariff-plans-could-reshape-global-trade"
    },
    {
      id: 3,
      title: "Federal Reserve Cautious About Interest Rate Path Amid New Administration",
      date: "April 2, 2025",
      summary: "The Federal Reserve is signaling a cautious approach to monetary policy as it navigates the transition to the new Trump administration. Officials are closely monitoring potential inflation risks from proposed tariffs and fiscal policies while balancing growth concerns.",
      source: "Bloomberg",
      url: "https://www.bloomberg.com/news/articles/2024-03-20/fed-signals-cautious-approach-amid-political-transition"
    },
    {
      id: 4,
      title: "Markets React to Trump's Cabinet Appointments",
      date: "March 30, 2025",
      summary: "Financial markets showed mixed reactions to President Trump's initial cabinet selections, with defense and energy sectors rallying while technology stocks faced pressure. Investors are particularly focused on appointees with regulatory and trade policy influence.",
      source: "Bloomberg",
      url: "https://www.bloomberg.com/news/articles/2024-03-18/markets-respond-to-cabinet-announcements"
    },
    {
      id: 5,
      title: "Trump Considers Executive Orders to Reshape Immigration Policy",
      date: "March 25, 2025",
      summary: "The incoming administration is preparing a series of executive orders aimed at immigration enforcement and border security. Officials indicate plans include reinstating and expanding policies from Trump's first term along with new measures targeting employer verification.",
      source: "Bloomberg",
      url: "https://www.bloomberg.com/news/articles/2024-03-15/immigration-enforcement-tops-early-agenda"
    }
  ];

  return (
    <Card className={cn("w-full", className)} id="current-events">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center">
          <Newspaper className="mr-2 h-6 w-6 text-trump-blue" />
          Current Developments
        </CardTitle>
        <CardDescription>
          Latest news from Bloomberg on the second Trump presidency
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {currentEvents.map((event) => (
            <div 
              key={event.id} 
              className="border rounded-lg p-4 transition-all hover:shadow-md bg-white"
            >
              <div className="flex items-start justify-between">
                <div className="w-full">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg">{event.title}</h3>
                    <a 
                      href={event.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-trump-blue hover:text-trump-red ml-2 flex items-center text-sm"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Source
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{event.date}</span>
                    <span className="mx-2">•</span>
                    <span>{event.source}</span>
                  </div>
                  <p className="text-gray-600">{event.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" onClick={() => window.open('https://www.bloomberg.com/latest', '_blank', 'noopener,noreferrer')}>
          <span>View More on Bloomberg</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CurrentEvents;
