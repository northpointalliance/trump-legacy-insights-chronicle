
import React from 'react';
import { cn } from '@/lib/utils';
import { TurnoverPosition } from '@/data/trumpTurnover';
import { formatDate } from '@/utils/eventUtils';

interface TurnoverItemProps {
  position: TurnoverPosition;
}

const TurnoverItem: React.FC<TurnoverItemProps> = ({ position }) => {
  return (
    <div className="timeline-item mb-6 animate-fade-in">
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
  );
};

export default TurnoverItem;
