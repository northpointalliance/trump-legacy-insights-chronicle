
import React from 'react';
import { cn } from '@/lib/utils';
import { PresidencyEvent } from '@/data/presidencyEvents';
import { getCategoryIcon, formatDate } from '@/utils/eventUtils';

interface EventItemProps {
  event: PresidencyEvent;
}

const EventItem: React.FC<EventItemProps> = ({ event }) => {
  return (
    <div className="timeline-item mb-6 animate-fade-in">
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
  );
};

export default EventItem;
