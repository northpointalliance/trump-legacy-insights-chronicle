
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BriefcaseBusiness, DollarSign, File, Gavel } from 'lucide-react';

const BusinessControversies = () => {
  return (
    <div className="flex flex-col min-h-screen bg-trump-gray">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="mb-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-trump-blue mb-4">
              Trump's Business Failures and Controversies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A historical overview of major business ventures and controversies prior to Trump's first term
            </p>
          </div>
        </section>
        
        <div className="space-y-8">
          <section className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <BriefcaseBusiness className="h-6 w-6 text-trump-red mr-2" />
              <h2 className="text-2xl font-bold text-trump-blue">Trump Shuttle</h2>
            </div>
            <p className="text-gray-700">
              Purchased in 1988 for $365 million, this airline failed to turn a profit and ceased operations by 1992 after defaulting on loans. The venture was plagued by high debt service and declining air travel during the Gulf War period.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <File className="h-6 w-6 text-trump-red mr-2" />
              <h2 className="text-2xl font-bold text-trump-blue">Trump University</h2>
            </div>
            <p className="text-gray-700">
              A for-profit educational venture launched in 2005, it closed in 2011 amid lawsuits alleging fraud. In 2013, the New York Attorney General sued Trump for $40 million. Trump eventually settled a class-action lawsuit for $25 million after his election in 2016.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <DollarSign className="h-6 w-6 text-trump-red mr-2" />
              <h2 className="text-2xl font-bold text-trump-blue">Bankruptcies</h2>
            </div>
            <p className="text-gray-700">
              Trump's businesses filed for Chapter 11 bankruptcy six times between 1991 and 2009, including Trump Taj Mahal (1991), Trump Plaza Hotel (1992), Trump Hotels & Casino Resorts (2004), and Trump Entertainment Resorts (2009). These bankruptcies were due to over-leveraging and financial mismanagement.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <File className="h-6 w-6 text-trump-red mr-2" />
              <h2 className="text-2xl font-bold text-trump-blue">Failed Products</h2>
            </div>
            <p className="text-gray-700">
              Trump Vodka (2006–2011), Trump Steaks (discontinued after two months), and GoTrump.com (a travel site shut down in one year) are examples of ventures that failed due to lack of demand and poor market positioning.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Gavel className="h-6 w-6 text-trump-red mr-2" />
              <h2 className="text-2xl font-bold text-trump-blue">Lawsuits</h2>
            </div>
            <p className="text-gray-700">
              By the time of his first presidential campaign in 2016, Trump or his companies had been involved in over 3,500 lawsuits, including cases as both plaintiff and defendant. These ranged from contract disputes to employment issues and allegations of fraud.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-trump-blue mb-4">Sources</h2>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-semibold">Los Angeles Times</span> - "A List of Trump's Disastrous Business Deals" (2022)</li>
              <li><span className="font-semibold">Time</span> - "Donald Trump's Biggest Business Failures" (2015)</li>
              <li><span className="font-semibold">The Ticker</span> - "Donald Trump's Failed Business Ventures" (2024)</li>
              <li><span className="font-semibold">ABI</span> - "Examining Donald Trump's Chapter 11 Bankruptcies"</li>
              <li><span className="font-semibold">Miller Center</span> - "Donald Trump: Life Before the Presidency" (2025)</li>
              <li><span className="font-semibold">Wikipedia</span> - "Business Career of Donald Trump" (2025)</li>
            </ul>
          </section>
        </div>
      </main>
      
      <Footer className="mt-12" />
    </div>
  );
};

export default BusinessControversies;
