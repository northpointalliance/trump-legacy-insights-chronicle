
import React from 'react';
import { Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PresidencyEvent, firstTermEvents, secondTermEvents } from '@/data/presidencyEvents';
import { TurnoverPosition, cabinetTurnover, secondTermCabinet } from '@/data/trumpTurnover';
import EventItem from './timeline/EventItem';
import TurnoverItem from './timeline/TurnoverItem';

interface EventTimelineProps {
  className?: string;
}

const EventTimeline: React.FC<EventTimelineProps> = ({ className }) => {
  const renderEvents = (events: PresidencyEvent[]) => {
    return (
      <div className="mt-6">
        {events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </div>
    );
  };

  const renderTurnover = (positions: TurnoverPosition[]) => {
    return (
      <div className="mt-6">
        {positions.map((position) => (
          <TurnoverItem key={position.id} position={position} />
        ))}
      </div>
    );
  };

  return (
    <Card className={className} id="timeline">
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
