
import React from 'react';
import { Flag, TrendingUp, BriefcaseBusiness, Tv } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("w-full bg-trump-blue text-white py-4 shadow-md", className)}>
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Flag className="mr-2 h-8 w-8" />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Trump Legacy Insights</h1>
            <p className="text-sm opacity-80">Tracking Presidency Impacts</p>
          </div>
        </div>
        
        <nav className="flex flex-wrap space-x-2 md:space-x-6">
          <Link to="/" className="hover:text-trump-red transition-colors duration-200 px-2 py-1">
            Home
          </Link>
          <a href="/#timeline" className="hover:text-trump-red transition-colors duration-200 px-2 py-1">
            Timeline
          </a>
          <a href="/#market-impact" className="hover:text-trump-red transition-colors duration-200 flex items-center px-2 py-1">
            <TrendingUp className="mr-1 h-4 w-4" /> Market Impact
          </a>
          <a href="/#current-events" className="hover:text-trump-red transition-colors duration-200 px-2 py-1">
            Current Events
          </a>
          <Link to="/trade-history" className="hover:text-trump-red transition-colors duration-200 px-2 py-1">
            Trade History
          </Link>
          <Link to="/business-controversies" className="hover:text-trump-red transition-colors duration-200 flex items-center px-2 py-1">
            <BriefcaseBusiness className="mr-1 h-4 w-4" /> Business History
          </Link>
          <Link to="/fox-news" className="hover:text-trump-red transition-colors duration-200 flex items-center px-2 py-1">
            <Tv className="mr-1 h-4 w-4" /> Fox News
          </Link>
          <Link to="/sitemap" className="hover:text-trump-red transition-colors duration-200 px-2 py-1">
            Site Map
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
