
import React from 'react';
import Header from '@/components/Header';
import EventTimeline from '@/components/EventTimeline';
import MarketImpact from '@/components/MarketImpact';
import CurrentEvents from '@/components/CurrentEvents';
import Footer from '@/components/Footer';

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
              An analytical chronicle of key policies, events, cabinet turnover, and economic impact 
              from the first presidency (2017-2021) and the second term (2025-).
            </p>
          </div>
        </section>
        
        <div className="space-y-12">
          <EventTimeline />
          <MarketImpact />
          <CurrentEvents />
        </div>
      </main>
      
      <Footer className="mt-12" />
    </div>
  );
};

export default Index;
