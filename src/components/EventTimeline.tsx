
import React from 'react';
import { Calendar, TrendingUp, Globe2, Gavel, BadgeCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PresidencyEvent, firstTermEvents, secondTermEvents } from '@/data/presidencyEvents';

interface EventTimelineProps {
  className?: string;
}

const EventTimeline: React.FC<EventTimelineProps> = ({ className }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'policy':
        return <BadgeCheck className="h-4 w-4 text-blue-500" />;
      case 'international':
        return <Globe2 className="h-4 w-4 text-green-500" />;
      case 'economic':
        return <TrendingUp className="h-4 w-4 text-yellow-500" />;
      case 'legal':
        return <Gavel className="h-4 w-4 text-red-500" />;
      default:
        return <Calendar className="h-4 w-4 text-gray-500" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const renderEvents = (events: PresidencyEvent[]) => {
    return (
      <div className="mt-6">
        {events.map((event) => (
          <div key={event.id} className="timeline-item animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  {formatDate(event.date)}
                </p>
                <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="flex items-center gap-1 bg-muted px-2 py-1 rounded-full text-xs">
                  {getCategoryIcon(event.category)}
                  <span className="capitalize">{event.category}</span>
                </div>
                <div className={cn(
                  "px-2 py-1 rounded-full text-xs font-medium text-white",
                  event.impact === 'high' ? "bg-trump-red" : 
                  event.impact === 'medium' ? "bg-yellow-500" : "bg-blue-500"
                )}>
                  {event.impact} impact
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Card className={cn("w-full", className)} id="timeline">
      <CardHeader>
        <CardTitle className="text-2xl">Presidency Timeline</CardTitle>
        <CardDescription>
          Key events during Trump's presidency and their significance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="first-term" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="first-term">First Term (2017-2021)</TabsTrigger>
            <TabsTrigger value="second-term">Second Term (2025-)</TabsTrigger>
          </TabsList>
          <TabsContent value="first-term">
            {renderEvents(firstTermEvents)}
          </TabsContent>
          <TabsContent value="second-term">
            {secondTermEvents.length > 0 ? 
              renderEvents(secondTermEvents) : 
              <p className="py-8 text-center text-muted-foreground">
                Second term events will be added as they occur.
              </p>
            }
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default EventTimeline;
