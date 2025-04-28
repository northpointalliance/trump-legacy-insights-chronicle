
import React from 'react';
import Header from '@/components/Header';
import EventTimeline from '@/components/EventTimeline';
import MarketImpact from '@/components/MarketImpact';
import Footer from '@/components/Footer';

const FirstPresidency = () => {
  return (
    <div className="flex flex-col min-h-screen bg-trump-gray">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="mb-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-trump-blue mb-4">
              The First Trump Presidency (2017-2021)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive overview of key events, policies, and market impacts during Donald Trump's first term as President.
            </p>
          </div>
        </section>
        
        <div className="space-y-12">
          <EventTimeline />
          <MarketImpact />
        </div>
      </main>
      
      <Footer className="mt-12" />
    </div>
  );
};

export default FirstPresidency;
