
import React from 'react';
import { cn } from '@/lib/utils';
import { Flag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("w-full bg-trump-blue text-white py-6", className)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Flag className="h-6 w-6 mr-2" />
            <span className="text-xl font-bold">Trump Legacy Insights</span>
          </div>
          
          <div className="flex flex-wrap justify-center space-x-4">
            <Link to="/" className="hover:text-trump-red transition-colors duration-200">
              Home
            </Link>
            <Link to="/trade-history" className="hover:text-trump-red transition-colors duration-200">
              Trade History
            </Link>
            <Link to="/business-controversies" className="hover:text-trump-red transition-colors duration-200">
              Business History
            </Link>
            <Link to="/fox-news" className="hover:text-trump-red transition-colors duration-200">
              Fox News
            </Link>
            <Link to="/trump-x-posts" className="hover:text-trump-red transition-colors duration-200">
              X Posts
            </Link>
            <Link to="/sitemap" className="hover:text-trump-red transition-colors duration-200">
              Site Map
            </Link>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm opacity-80">
          <p>© 2025 Trump Legacy Insights. All rights reserved.</p>
          <p className="mt-1">
            This site is for informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
