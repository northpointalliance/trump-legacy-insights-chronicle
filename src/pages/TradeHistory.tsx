
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TradeHistory = () => {
  return (
    <div className="flex flex-col min-h-screen bg-trump-gray">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="mb-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-trump-blue mb-4">
              Trade History and Economics
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Historical analysis of U.S. trade policies, tariffs, and economic implications
            </p>
          </div>
        </section>
        
        <div className="space-y-8">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-trump-blue mb-4">Trade Imbalance When the U.S. Was the Top Manufacturing Nation</h2>
            <p className="text-gray-700">
              When the United States was the top manufacturing nation (1870–1970), it ran persistent trade surpluses averaging about 1.1% of GDP. 
              The U.S. exported manufactured goods while importing raw materials and agricultural products.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-trump-blue mb-4">Tariff History</h2>
            <p className="text-gray-700 font-semibold">Early Protectionism (1790–1933):</p>
            <p className="text-gray-700 mb-4">Tariffs were high (20–60%) to protect U.S. industries.</p>
            
            <p className="text-gray-700 font-semibold">Reciprocity Period (1934–1942):</p>
            <p className="text-gray-700 mb-4">Tariffs decreased significantly as free trade policies emerged.</p>
            
            <p className="text-gray-700 font-semibold">Post-WWII Era:</p>
            <p className="text-gray-700">Free trade policies dominated, with occasional protectionist measures after 2016.</p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-trump-blue mb-4">Lack of Labor Unions During Early Protectionism</h2>
            <p className="text-gray-700">
              During the early protectionist period, labor unions were largely absent from factories. 
              Workers faced harsh conditions, long hours, and low wages without collective bargaining power.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-trump-blue mb-4">Main Trading Partners Pre-1960s</h2>
            <p className="text-gray-700">
              The U.S.'s main trading partners before the 1960s included the United Kingdom, Canada, Germany, and France. 
              Trade was characterized by U.S. exports of manufactured goods and imports of raw materials.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-trump-blue mb-4">U.S.-Canada and U.S.-Mexico Trade Relationships Before the 1960s</h2>
            <p className="text-gray-700 font-semibold">Canada:</p>
            <p className="text-gray-700 mb-4">
              Early reciprocity treaties facilitated trade in natural products, followed by agreements in the mid-20th century that reduced tariffs.
            </p>
            
            <p className="text-gray-700 font-semibold">Mexico:</p>
            <p className="text-gray-700">
              Trade was modest but focused on agriculture and informal industrial growth.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-trump-blue mb-4">The Smoot-Hawley Tariff Act and Its Role in the Great Depression</h2>
            <p className="text-gray-700">
              The Smoot-Hawley Tariff Act (1930) raised tariffs on over 20,000 imported goods, worsening global trade conditions 
              during the Great Depression through retaliatory tariffs and reduced exports.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-trump-blue mb-4">Trump's Trade Actions vs. Smoot-Hawley</h2>
            <p className="text-gray-700">
              Unlike Smoot-Hawley, which went through Congress under Article I, Trump used executive powers under laws like 
              Section 232 (national security) and Section 301 (retaliatory tariffs) to impose tariffs without congressional approval.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-trump-blue mb-4">China's Rise as a Dominant Manufacturing Nation</h2>
            <p className="text-gray-700 font-semibold">Key Factors:</p>
            <p className="text-gray-700 mb-4">
              Economic reforms under Deng Xiaoping, WTO membership (2001), low-cost labor, and infrastructure investment.
            </p>
            
            <p className="text-gray-700 font-semibold">Role of Tariffs:</p>
            <p className="text-gray-700">
              Low global tariffs enabled China's export growth. U.S. tariffs during Trump's presidency aimed to challenge China's 
              dominance but led to production shifts to other countries rather than back to the U.S.
            </p>
          </section>
        </div>
      </main>
      
      <Footer className="mt-12" />
    </div>
  );
};

export default TradeHistory;
