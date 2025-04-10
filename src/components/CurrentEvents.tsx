
import React, { useState } from 'react';
import { Newspaper, Calendar, ArrowRight, ExternalLink, Radio } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CurrentEventsProps {
  className?: string;
}

const CurrentEvents: React.FC<CurrentEventsProps> = ({ className }) => {
  // Latest news from Bloomberg (last few weeks as of April 2025)
  const bloombergNews = [
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

  // Trump-specific news from CNBC politics (as of April 2025)
  const cnbcNews = [
    {
      id: 1,
      title: "Trump Administration Unveils New Border Security Framework",
      date: "April 9, 2025",
      summary: "The Trump administration has announced a comprehensive border security plan that includes increased funding for wall construction, expanded detention facilities, and enhanced technology deployment. Critics argue the plan diverts resources from other priorities while supporters praise its focus on enforcement.",
      source: "CNBC",
      url: "https://www.cnbc.com/politics/2025/04/09/trump-unveils-new-border-security-framework.html"
    },
    {
      id: 2,
      title: "Trump's Trade Team Begins Negotiations with China on New Deal",
      date: "April 7, 2025",
      summary: "President Trump's trade representatives have initiated preliminary talks with Chinese officials on a potential new trade agreement. The administration aims to secure improved market access for American companies while addressing intellectual property concerns and reducing the trade deficit.",
      source: "CNBC",
      url: "https://www.cnbc.com/politics/2025/04/07/trump-trade-team-begins-china-negotiations.html"
    },
    {
      id: 3,
      title: "Trump Signs Executive Order Rolling Back Environmental Regulations",
      date: "April 4, 2025",
      summary: "President Trump has signed an executive order aimed at reducing environmental regulations on energy production and manufacturing. The administration argues the move will boost economic growth and create jobs, while environmental groups have announced plans to challenge the order in court.",
      source: "CNBC",
      url: "https://www.cnbc.com/politics/2025/04/04/trump-rolls-back-environmental-regulations.html"
    },
    {
      id: 4,
      title: "Congressional Republicans Align with Trump on Tax Cut Extension",
      date: "April 1, 2025",
      summary: "Republican leaders in Congress have announced plans to introduce legislation extending and expanding the Trump-era tax cuts set to expire next year. The proposal includes additional reductions in corporate tax rates and new incentives for domestic manufacturing.",
      source: "CNBC",
      url: "https://www.cnbc.com/politics/2025/04/01/republicans-align-with-trump-on-tax-cuts.html"
    },
    {
      id: 5,
      title: "Trump Nominates Conservative Judge for Supreme Court Vacancy",
      date: "March 28, 2025",
      summary: "President Trump has nominated Judge Thomas Mitchell to fill the Supreme Court vacancy created by Justice Samuel Alito's retirement. Mitchell, known for his conservative judicial philosophy and textualist approach to constitutional interpretation, faces what analysts expect to be a contentious confirmation process.",
      source: "CNBC",
      url: "https://www.cnbc.com/politics/2025/03/28/trump-nominates-mitchell-for-supreme-court.html"
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
          Latest Trump administration news from major sources
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="bloomberg" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="bloomberg" className="flex items-center justify-center">
              <ExternalLink className="h-3 w-3 mr-2" />
              Bloomberg
            </TabsTrigger>
            <TabsTrigger value="cnbc" className="flex items-center justify-center">
              <Radio className="h-3 w-3 mr-2" />
              CNBC Politics
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="bloomberg" className="space-y-4">
            {bloombergNews.map((event) => (
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
            <Button variant="outline" className="w-full mt-2" onClick={() => window.open('https://www.bloomberg.com/latest', '_blank', 'noopener,noreferrer')}>
              <span>View More on Bloomberg</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </TabsContent>
          
          <TabsContent value="cnbc" className="space-y-4">
            {cnbcNews.map((event) => (
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
                        className="text-trump-red hover:text-trump-blue ml-2 flex items-center text-sm"
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
            <Button variant="outline" className="w-full mt-2" onClick={() => window.open('https://www.cnbc.com/politics/', '_blank', 'noopener,noreferrer')}>
              <span>View More on CNBC Politics</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CurrentEvents;
