import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BriefcaseBusiness, DollarSign, File, Gavel, AlertTriangle, Banknote, Minus } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
            
            <div className="mt-4 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Year</TableHead>
                    <TableHead>Business</TableHead>
                    <TableHead>Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>1991</TableCell>
                    <TableCell>Trump Taj Mahal</TableCell>
                    <TableCell>Filed for bankruptcy after being open for one year, with $3 billion in debt</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1992</TableCell>
                    <TableCell>Trump Plaza Hotel & Casino</TableCell>
                    <TableCell>Filed Chapter 11 with over $550 million in debt</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1992</TableCell>
                    <TableCell>Trump Castle Hotel & Casino</TableCell>
                    <TableCell>Filed for bankruptcy protection</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2004</TableCell>
                    <TableCell>Trump Hotels & Casino Resorts</TableCell>
                    <TableCell>Filed for bankruptcy with $1.8 billion in debt</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2009</TableCell>
                    <TableCell>Trump Entertainment Resorts</TableCell>
                    <TableCell>Filed for bankruptcy after missing a $53.1 million bond interest payment</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <File className="h-6 w-6 text-trump-red mr-2" />
              <h2 className="text-2xl font-bold text-trump-blue">Failed Products</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Trump Vodka (2006–2011), Trump Steaks (discontinued after two months), and GoTrump.com (a travel site shut down in one year) are examples of ventures that failed due to lack of demand and poor market positioning.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-md p-3">
                <div className="flex items-center mb-2">
                  <Banknote className="h-4 w-4 text-trump-red mr-2" />
                  <h3 className="font-bold">Trump Mortgage (2006-2007)</h3>
                </div>
                <p className="text-sm text-gray-600">Launched at the peak of the housing bubble, just before the market collapsed. Closed after one year of operation.</p>
              </div>
              
              <div className="border rounded-md p-3">
                <div className="flex items-center mb-2">
                  <Minus className="h-4 w-4 text-trump-red mr-2" />
                  <h3 className="font-bold">Trump Magazine (2007-2009)</h3>
                </div>
                <p className="text-sm text-gray-600">A luxury lifestyle publication that ceased operations after two years due to poor advertising revenue.</p>
              </div>
              
              <div className="border rounded-md p-3">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="h-4 w-4 text-trump-red mr-2" />
                  <h3 className="font-bold">Trump Network (2009-2012)</h3>
                </div>
                <p className="text-sm text-gray-600">A multi-level marketing company selling urine tests and vitamins. Sold off after three years of operation.</p>
              </div>
              
              <div className="border rounded-md p-3">
                <div className="flex items-center mb-2">
                  <DollarSign className="h-4 w-4 text-trump-red mr-2" />
                  <h3 className="font-bold">Trump Ice (bottled water)</h3>
                </div>
                <p className="text-sm text-gray-600">Failed to gain significant market share and was eventually limited to Trump properties only.</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-trump-red mr-2" />
              <h2 className="text-2xl font-bold text-trump-blue">Real Estate Failures</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Several Trump-branded real estate developments faced significant issues prior to his presidency:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Trump Tower Tampa (2005-2008):</strong> Announced but never built. Deposits of $40 million were eventually refunded after lawsuits.</li>
              <li><strong>Trump Ocean Resort Baja Mexico (2006-2009):</strong> Collected $32 million in pre-construction deposits but was never built. Lawsuits followed.</li>
              <li><strong>Trump International Hotel & Tower Fort Lauderdale:</strong> Announced in 2005, abandoned after the 2008 financial crisis, leaving buyers without their deposits.</li>
              <li><strong>Trump SoHo (2008-2017):</strong> Rebranded as The Dominick after poor performance. The Trump Organization was bought out of its contract amid criminal investigations.</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Gavel className="h-6 w-6 text-trump-red mr-2" />
              <h2 className="text-2xl font-bold text-trump-blue">Lawsuits</h2>
            </div>
            <p className="text-gray-700">
              By the time of his first presidential campaign in 2016, Trump or his companies had been involved in over 3,500 lawsuits, including cases as both plaintiff and defendant. These ranged from contract disputes to employment issues and allegations of fraud.
            </p>
            
            <div className="mt-4 space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-trump-blue mb-2">Housing Discrimination (1973)</h3>
                <p className="text-gray-700 text-sm">
                  The Justice Department sued Trump Management Corporation for discriminating against Black rental applicants. 
                  The lawsuit was eventually settled with a consent decree requiring the Trump company to change its rental practices.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-trump-blue mb-2">Trump University Settlement (2016)</h3>
                <p className="text-gray-700 text-sm">
                  After extensive litigation, Trump agreed to pay $25 million to settle fraud allegations related to Trump University. 
                  The settlement covered two class-action lawsuits and a civil case filed by the New York Attorney General.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-trump-blue mb-2">Trump Foundation (2016)</h3>
                <p className="text-gray-700 text-sm">
                  The Donald J. Trump Foundation faced scrutiny for alleged misuse of charitable funds. 
                  The foundation was eventually dissolved under judicial supervision, with assets distributed to approved charities.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-trump-blue mb-4">Sources</h2>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-semibold">Los Angeles Times</span> - "A List of Trump's Disastrous Business Deals" (2022)</li>
              <li><span className="font-semibold">Time</span> - "Donald Trump's Biggest Business Failures" (2015)</li>
              <li><span className="font-semibold">The Ticker</span> - "Donald Trump's Failed Business Ventures" (2024)</li>
              <li><span className="font-semibold">ABI</span> - "Examining Donald Trump's Chapter 11 Bankruptcies"</li>
              <li><span className="font-semibold">Miller Center</span> - "Donald Trump: Life Before the Presidency" (2025)</li>
              <li><span className="font-semibold">The Washington Post</span> - "The Business Disasters That Trump Doesn't Want You to Know About" (2016)</li>
              <li><span className="font-semibold">The Washington Post</span> - "Trump Foundation Faces Scrutiny for Donations" (September 13, 2016)</li>
              <li><span className="font-semibold">Forbes</span> - "How Donald Trump Turned Around His Business Failures" (2018)</li>
              <li><span className="font-semibold">The New York Times</span> - "Justice Department Sues Trump Firm for Bias" (October 16, 1973)</li>
              <li><span className="font-semibold">The New York Times</span> - "Trump Agrees to Pay $25 Million in Trump University Settlement" (November 18, 2016)</li>
              <li><span className="font-semibold">The New York Times</span> - Multiple Articles (2010-2016) - "Trump University Investigation"</li>
              <li><span className="font-semibold">The Wall Street Journal</span> - Coverage of Trump's Business Disputes and Casino Fines</li>
              <li><span className="font-semibold">Wikipedia</span> - "Business Career of Donald Trump" (2025)</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600 italic">
              Note: Full articles can be accessed via ProQuest, LexisNexis, or newspaper archives like nytimes.com/archives.
            </p>
          </section>
        </div>
      </main>
      
      <Footer className="mt-12" />
    </div>
  );
};

export default BusinessControversies;
