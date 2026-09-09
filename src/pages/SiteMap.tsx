
import React from 'react';
import Header from '@/components/Header';
import SEO from '@/components/SEO';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const SiteMap = () => {
  return (
    <div className="flex flex-col min-h-screen bg-trump-gray">
      <SEO
        title="Site Map | Trump Legacy Insights Chronicle"
        description="Browse all pages available on Trump Legacy Insights Chronicle, including trade history, cabinet turnover, X posts, and more."
        path="/sitemap"
      />
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="mb-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-trump-blue mb-4">
              Site Map
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All pages available on Trump Legacy Insights Chronicle
            </p>
          </div>
        </section>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-trump-blue mb-4">Main Pages</h2>
          <ul className="space-y-4">
            <li className="border-b pb-2">
              <Link to="/" className="text-xl text-trump-blue hover:text-trump-red transition-colors">
                Home Page
              </Link>
              <p className="text-gray-600">Main landing page with overview of Trump presidency</p>
            </li>
            <li className="border-b pb-2">
              <Link to="/trade-history" className="text-xl text-trump-blue hover:text-trump-red transition-colors">
                Trade History
              </Link>
              <p className="text-gray-600">Historical analysis of U.S. trade policies, tariffs, and economic implications</p>
            </li>
            <li className="border-b pb-2">
              <Link to="/business-controversies" className="text-xl text-trump-blue hover:text-trump-red transition-colors">
                Business History & Controversies
              </Link>
              <p className="text-gray-600">Trump's business ventures, failures, and legal controversies before his presidency</p>
            </li>
            <li className="border-b pb-2">
              <Link to="/fox-news" className="text-xl text-trump-blue hover:text-trump-red transition-colors">
                Fox News and Campaign Rallies
              </Link>
              <p className="text-gray-600">The relationship between Fox News coverage and Trump's political campaigns</p>
            </li>
            <li className="border-b pb-2">
              <Link to="/trump-x-posts" className="text-xl text-trump-blue hover:text-trump-red transition-colors">
                X Posts Before January 6th
              </Link>
              <p className="text-gray-600">Key posts about election fraud and calls to the Capitol prior to January 6, 2021</p>
            </li>
            <li className="border-b pb-2">
              <Link to="/trump-insults" className="text-xl text-trump-blue hover:text-trump-red transition-colors">
                Trump's Public Insults
              </Link>
              <p className="text-gray-600">Documented insults directed at politicians, celebrities, journalists, and other public figures</p>
            </li>
            <li className="border-b pb-2">
              <Link to="/congressional-departures" className="text-xl text-trump-blue hover:text-trump-red transition-colors">
                Congressional Departures (2017–2021)
              </Link>
              <p className="text-gray-600">Resignations, retirements, and turnover in the 115th and 116th Congresses during Trump's first term</p>
            </li>
            <li className="border-b pb-2">
              <Link to="/epstein-files" className="text-xl text-trump-blue hover:text-trump-red transition-colors">
                Epstein Files Transparency Act
              </Link>
              <p className="text-gray-600">The law Trump signed in November 2025, the records still withheld, and the GOP leadership blocks on enforcing it</p>
            </li>
          </ul>
          
          <h2 className="text-2xl font-bold text-trump-blue my-6">Sections on Home Page</h2>
          <ul className="space-y-4">
            <li className="border-b pb-2">
              <a href="/#timeline" className="text-xl text-trump-blue hover:text-trump-red transition-colors">
                Timeline
              </a>
              <p className="text-gray-600">Chronological events during Trump's presidency</p>
            </li>
            <li className="border-b pb-2">
              <a href="/#market-impact" className="text-xl text-trump-blue hover:text-trump-red transition-colors">
                Market Impact
              </a>
              <p className="text-gray-600">Economic and market effects of Trump's policies</p>
            </li>
            <li className="border-b pb-2">
              <a href="/#current-events" className="text-xl text-trump-blue hover:text-trump-red transition-colors">
                Current Events
              </a>
              <p className="text-gray-600">Latest news related to Trump's presidency</p>
            </li>
          </ul>
        </div>
      </main>
      
      <Footer className="mt-12" />
    </div>
  );
};

export default SiteMap;
