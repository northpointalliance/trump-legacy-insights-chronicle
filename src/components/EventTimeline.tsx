
import React from 'react';
import { Calendar, TrendingUp, Globe2, Gavel, BadgeCheck, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PresidencyEvent, firstTermEvents, secondTermEvents } from '@/data/presidencyEvents';
import { TurnoverPosition, cabinetTurnover, secondTermCabinet } from '@/data/trumpTurnover';

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

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Present";
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
          <div key={event.id} className="timeline-item mb-6 animate-fade-in">
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

  const renderTurnover = (positions: TurnoverPosition[]) => {
    return (
      <div className="mt-6">
        {positions.map((position) => (
          <div key={position.id} className="timeline-item mb-6 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{position.position}</h3>
                <p className="text-lg font-medium mb-1">{position.name}</p>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  {formatDate(position.startDate)} - {formatDate(position.endDate)}
                  {position.daysInOffice && <span className="ml-2">({position.daysInOffice} days)</span>}
                </p>
                <p className="text-gray-600">{position.department}</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className={cn(
                  "px-2 py-1 rounded-full text-xs font-medium text-white",
                  position.reason === 'Fired' ? "bg-trump-red" : 
                  position.reason === 'Resigned' ? "bg-yellow-500" : 
                  position.reason === 'Still in office' ? "bg-green-500" : "bg-blue-500"
                )}>
                  {position.reason}
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
          Key events and personnel changes during Trump's presidency
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="first-term" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="first-term">Events 2017-2021</TabsTrigger>
            <TabsTrigger value="second-term">Events 2025-</TabsTrigger>
            <TabsTrigger value="first-term-turnover">Staff 2017-2021</TabsTrigger>
            <TabsTrigger value="second-term-turnover">Staff 2025-</TabsTrigger>
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
          <TabsContent value="first-term-turnover">
            <div className="pb-4">
              <h3 className="text-lg font-medium mb-1">
                <Users className="h-4 w-4 inline mr-2" /> 
                Cabinet & Staff Turnover (Source: Brookings Institution)
              </h3>
              <p className="text-sm text-muted-foreground">
                <a href="https://www.brookings.edu/articles/tracking-turnover-in-the-trump-administration/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-trump-blue hover:underline">
                  View full turnover tracker at Brookings
                </a>
              </p>
            </div>
            {renderTurnover(cabinetTurnover)}
          </TabsContent>
          <TabsContent value="second-term-turnover">
            <div className="pb-4">
              <h3 className="text-lg font-medium mb-1">
                <Users className="h-4 w-4 inline mr-2" /> 
                Cabinet & Staff (Second Term)
              </h3>
            </div>
            {secondTermCabinet.length > 0 ? 
              renderTurnover(secondTermCabinet) : 
              <p className="py-8 text-center text-muted-foreground">
                Second term cabinet information will be updated as changes occur.
              </p>
            }
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default EventTimeline;
