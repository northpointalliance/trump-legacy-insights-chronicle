
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TradeBalanceInfo from '@/components/TradeBalanceInfo';
import { ExternalLink, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface RecentSource {
  date: string;
  title: string;
  outlet: string;
  summary: string;
  url: string;
  tag: 'Tariffs' | 'Trade Deficit' | 'Jobs' | 'GDP';
}

const recentSources: RecentSource[] = [
  {
    date: '2026-04-03',
    title: 'Trump tariffs fall, but trade war impacts linger',
    outlet: 'CNBC',
    summary: 'A year after the "liberation day" tariff push, retailers and automakers are still re-modeling supply chains and economic risk to limit tariff exposure.',
    url: 'https://www.cnbc.com/2026/04/03/trump-tariffs-trade-war-impact.html',
    tag: 'Tariffs',
  },
  {
    date: '2026-04-01',
    title: 'A check-in on manufacturing jobs, one year since Trump\'s tariffs',
    outlet: 'Marketplace',
    summary: 'UChicago economist Matt Notowidigdo describes uncertain tariff policy as "very paralyzing" for U.S. manufacturers, with hiring stalled across the sector.',
    url: 'https://www.marketplace.org/story/2026/04/01/how-trumps-tariffs-have-affected-manufacturing-jobs',
    tag: 'Jobs',
  },
  {
    date: '2026-04-01',
    title: 'The Trade Whipsaw: How Tariff Front-Running Distorted a Year of Data',
    outlet: 'Gov Transparency Project',
    summary: 'The U.S. trade deficit "improved" by $81B between March 2025 and January 2026 — but the swing was driven by importers front-running tariffs, not a real recovery.',
    url: 'https://govtransparencyproject.org/articles/tariff-shock-trade-reversal-consumer-slowdown-2026.html',
    tag: 'Trade Deficit',
  },
  {
    date: '2026-03-26',
    title: 'Trump\'s tariffs had little impact on GDP in 2025, but raised revenue',
    outlet: 'Reuters',
    summary: 'A new academic paper finds tariffs generated meaningful federal revenue in 2025 while leaving GDP largely unchanged — undercutting both protectionist and recessionary predictions.',
    url: 'https://www.reuters.com/business/trumps-tariffs-had-little-impact-gdp-2025-raised-revenue-academic-paper-finds-2026-03-26/',
    tag: 'GDP',
  },
  {
    date: '2026-03-19',
    title: 'It\'s Official: Trump\'s Tariffs Have Failed',
    outlet: 'Foreign Policy',
    summary: 'Analysis argues American consumers have absorbed the cost, reindustrialization has not materialized, and China has captured market share elsewhere.',
    url: 'https://foreignpolicy.com/2026/03/19/trump-tariffs-trade-failure-deficit-reindustrialization-china-economy-costs/',
    tag: 'Tariffs',
  },
  {
    date: '2026-03-12',
    title: 'US trade deficit narrows in January as exports jump to record high',
    outlet: 'Reuters',
    summary: 'January exports hit a record as the trade deficit narrowed sharply — but economists warn the move reflects post-tariff inventory adjustments rather than structural rebalancing.',
    url: 'https://www.reuters.com/world/us/us-trade-deficit-narrows-january-exports-jump-record-high-2026-03-12/',
    tag: 'Trade Deficit',
  },
  {
    date: '2026-02-21',
    title: 'GDP growth and trade deficit figures blow a hole in Trump\'s rosy narrative',
    outlet: 'CNN',
    summary: 'New BEA data show slowing growth alongside a record goods trade deficit, complicating administration claims that tariffs are revitalizing the U.S. economy.',
    url: 'https://www.cnn.com/2026/02/21/politics/economy-gdp-trade-deficit-trump-tariffs',
    tag: 'GDP',
  },
  {
    date: '2026-02-19',
    title: 'Trade deficit hits all-time record under tariffs as 83,000 jobs vanish',
    outlet: 'The Daily Overview',
    summary: 'BEA data show the 2025 U.S. goods trade deficit reached $1,240.9B — an all-time record — while academic modeling attributes ~83,000 lost jobs to tariff-driven supply-chain shocks.',
    url: 'https://thedailyoverview.com/trade-deficit-hits-all-time-record-under-tariffs-as-83000-jobs-vanish/',
    tag: 'Jobs',
  },
];

const tagColors: Record<RecentSource['tag'], string> = {
  Tariffs: 'bg-trump-red/10 text-trump-red border-trump-red/30',
  'Trade Deficit': 'bg-trump-blue/10 text-trump-blue border-trump-blue/30',
  Jobs: 'bg-amber-100 text-amber-800 border-amber-300',
  GDP: 'bg-emerald-100 text-emerald-800 border-emerald-300',
};

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
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <h2 className="text-2xl font-bold text-trump-blue flex items-center gap-2">
                <Calendar className="h-6 w-6" />
                Latest Coverage (Last 4 Months)
              </h2>
              <span className="text-sm text-gray-500">
                {recentSources.length} sources · Dec 2025 – Apr 2026
              </span>
            </div>
            <p className="text-gray-600 mb-6 text-sm">
              Recent reporting and analysis on tariffs, the trade deficit, manufacturing jobs, and GDP from major outlets and research organizations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recentSources.map((src) => (
                <a
                  key={src.url}
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border rounded-lg p-4 hover:border-trump-blue hover:shadow-md transition-all bg-trump-gray/30"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge variant="outline" className={tagColors[src.tag]}>
                      {src.tag}
                    </Badge>
                    <span className="text-xs text-gray-500 whitespace-nowrap">
                      {new Date(src.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <h3 className="font-semibold text-trump-blue mb-1 group-hover:underline flex items-start gap-1">
                    <span>{src.title}</span>
                    <ExternalLink className="h-3 w-3 mt-1 shrink-0 opacity-60" />
                  </h3>
                  <p className="text-xs font-medium text-gray-500 mb-2">{src.outlet}</p>
                  <p className="text-sm text-gray-700">{src.summary}</p>
                </a>
              ))}
            </div>
          </section>

          <TradeBalanceInfo />
          
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
