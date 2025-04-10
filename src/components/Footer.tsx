
import React from 'react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("w-full bg-trump-blue text-white py-6", className)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Trump Legacy Insights</h2>
            <p className="text-sm opacity-70">
              Tracking presidential impact since 2017
            </p>
          </div>
          
          <div className="text-sm opacity-70">
            <p>© {new Date().getFullYear()} Trump Legacy Insights</p>
            <p>Data sourced from public records and financial markets</p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/20 text-center text-xs opacity-60">
          <p>
            This site provides data for informational purposes only. 
            Not affiliated with any political party or government entity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
