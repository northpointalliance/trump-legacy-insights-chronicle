
import React from 'react';
import Header from '@/components/Header';
import CurrentEvents from '@/components/CurrentEvents';
import ForeignTravelersData from '@/components/ForeignTravelersData';
import FirstHundredDaysSection from '@/components/FirstHundredDaysSection';
import MarketImpact from '@/components/MarketImpact';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-trump-gray">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="mb-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-trump-blue mb-4">
              Tracking the Trump Presidency
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Following the latest developments and impact of the second Trump presidency (2025-).
              <a href="/first-presidency" className="text-trump-blue hover:text-trump-red ml-2">
                View 2017-2021 presidency →
              </a>
            </p>
            <div className="flex justify-center mt-4 space-x-4 text-sm">
              <Link to="/trade-history" className="text-trump-blue hover:text-trump-red underline">
                Trade History & Economics
              </Link>
              <Link to="/business-controversies" className="text-trump-blue hover:text-trump-red underline">
                Business Controversies
              </Link>
              <Link to="/trump-x-posts" className="text-trump-blue hover:text-trump-red underline">
                Trump X Posts
              </Link>
            </div>
          </div>
        </section>
        
        <div className="space-y-12">
          <FirstHundredDaysSection />
          <MarketImpact />
          <CurrentEvents />
          <ForeignTravelersData />
        </div>
      </main>
      
      <Footer className="mt-12" />
    </div>
  );
};

export default Index;
