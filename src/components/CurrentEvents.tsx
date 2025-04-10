
import React from 'react';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CurrentEventsProps {
  className?: string;
}

const CurrentEvents: React.FC<CurrentEventsProps> = ({ className }) => {
  // Sample current events - would be fetched from an API in a real application
  const currentEvents = [
    {
      id: 1,
      title: "Cabinet Appointments Begin",
      date: "April 8, 2025",
      summary: "President Trump begins announcing cabinet appointments for his second term.",
      source: "White House Press"
    },
    {
      id: 2,
      title: "Economic Policy Announcement",
      date: "April 5, 2025",
      summary: "New tariff policies announced affecting trade with China and the European Union.",
      source: "Department of Commerce"
    },
    {
      id: 3,
      title: "Executive Order on Immigration",
      date: "April 2, 2025",
      summary: "Executive order signed to reinstate stricter border policies from first term.",
      source: "Department of Homeland Security"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <Card className={cn("w-full", className)} id="current-events">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center">
          <Newspaper className="mr-2 h-6 w-6 text-trump-blue" />
          Current Developments
        </CardTitle>
        <CardDescription>
          Latest events and policy changes in the second term
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
                <div>
                  <h3 className="font-bold text-lg">{event.title}</h3>
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
        <Button variant="outline" className="w-full">
          <span>View All Events</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CurrentEvents;
