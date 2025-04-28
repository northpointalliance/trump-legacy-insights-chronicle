
import { Calendar, TrendingUp, Globe2, Gavel, BadgeCheck } from 'lucide-react';

export const getCategoryIcon = (category: string) => {
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

export const formatDate = (dateString: string | null) => {
  if (!dateString) return "Present";
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
};
