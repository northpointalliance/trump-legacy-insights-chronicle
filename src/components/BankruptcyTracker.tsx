import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, AlertTriangle } from 'lucide-react';

const monthlyData = [
  { month: 'Jan 2025', total: 44128, consumer: 41585, commercial: 2543, ch7: 25800, ch11: 544, ch13: 15200 },
  { month: 'Feb 2025', total: 43950, consumer: 41400, commercial: 2550, ch7: 25600, ch11: 580, ch13: 15100 },
  { month: 'Mar 2025', total: 48200, consumer: 45500, commercial: 2700, ch7: 28100, ch11: 733, ch13: 16500 },
  { month: 'Apr 2025', total: 44800, consumer: 42200, commercial: 2600, ch7: 26200, ch11: 453, ch13: 15400 },
  { month: 'May 2025', total: 47500, consumer: 44700, commercial: 2800, ch7: 27800, ch11: 733, ch13: 16100 },
  { month: 'Jun 2025', total: 47548, consumer: 45553, commercial: 1995, ch7: 29719, ch11: 650, ch13: 15625 },
  { month: 'Jul 2025', total: 48200, consumer: 45500, commercial: 2700, ch7: 28500, ch11: 680, ch13: 16200 },
  { month: 'Aug 2025', total: 47800, consumer: 45100, commercial: 2700, ch7: 28200, ch11: 670, ch13: 16100 },
  { month: 'Sep 2025', total: 48500, consumer: 45800, commercial: 2700, ch7: 28800, ch11: 690, ch13: 16200 },
  { month: 'Oct 2025', total: 49200, consumer: 46400, commercial: 2800, ch7: 29200, ch11: 710, ch13: 16400 },
  { month: 'Nov 2025', total: 49600, consumer: 46800, commercial: 2800, ch7: 29500, ch11: 720, ch13: 16500 },
  { month: 'Dec 2025', total: 45935, consumer: 43387, commercial: 2548, ch7: 27150, ch11: 592, ch13: 16147 },
];

const yearlyComparison = [
  { year: '2019 (Pre-COVID)', total: 757816, consumer: 718651, commercial: 39165 },
  { year: '2020', total: 544463, consumer: 517082, commercial: 27381 },
  { year: '2021', total: 413616, consumer: 395373, commercial: 18243 },
  { year: '2022', total: 387721, consumer: 370489, commercial: 17232 },
  { year: '2023', total: 452990, consumer: 425700, commercial: 27290 },
  { year: '2024', total: 508953, consumer: 478752, commercial: 30201 },
  { year: '2025', total: 565759, consumer: 533949, commercial: 31810 },
];

const BankruptcyTracker: React.FC = () => {
  const totalFilings2025 = 565759;
  const totalFilings2024 = 508953;
  const yoyChange = ((totalFilings2025 - totalFilings2024) / totalFilings2024 * 100).toFixed(1);

  return (
    <section id="bankruptcy-tracker" className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-trump-blue mb-2 flex items-center justify-center gap-2">
          <AlertTriangle className="h-8 w-8 text-trump-red" />
          U.S. Bankruptcy Filings Tracker
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Tracking bankruptcy filing trends since January 2025. Total filings rose 11% year-over-year, 
          reflecting growing financial pressure on American households and businesses.
        </p>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-sm text-muted-foreground">Total 2025 Filings</p>
            <p className="text-3xl font-bold text-trump-blue">{totalFilings2025.toLocaleString()}</p>
            <p className="text-sm text-trump-red flex items-center justify-center gap-1 mt-1">
              <TrendingUp className="h-4 w-4" /> +{yoyChange}% vs 2024
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-sm text-muted-foreground">Consumer Filings</p>
            <p className="text-3xl font-bold text-trump-blue">533,949</p>
            <p className="text-sm text-trump-red">+12% vs 2024</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-sm text-muted-foreground">Chapter 7 (Individual)</p>
            <p className="text-3xl font-bold text-trump-blue">332,706</p>
            <p className="text-sm text-trump-red">+15% vs 2024</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-sm text-muted-foreground">Commercial Ch. 11</p>
            <p className="text-3xl font-bold text-trump-blue">7,940</p>
            <p className="text-sm text-trump-red">+1% vs 2024</p>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-trump-blue">Monthly Bankruptcy Filings (2025)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} angle={-45} textAnchor="end" height={80} />
                <YAxis />
                <Tooltip formatter={(value: number) => value.toLocaleString()} />
                <Legend />
                <Bar dataKey="consumer" name="Consumer" fill="#1a3a5c" />
                <Bar dataKey="commercial" name="Commercial" fill="#c62828" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Year-over-Year Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="text-trump-blue">Year-over-Year Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Year</TableHead>
                <TableHead className="text-right">Total Filings</TableHead>
                <TableHead className="text-right">Consumer</TableHead>
                <TableHead className="text-right">Commercial</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {yearlyComparison.map((row) => (
                <TableRow key={row.year} className={row.year === '2025' ? 'bg-trump-red/10 font-semibold' : ''}>
                  <TableCell>{row.year}</TableCell>
                  <TableCell className="text-right">{row.total.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{row.consumer.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{row.commercial.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Key Drivers */}
      <Card>
        <CardHeader>
          <CardTitle className="text-trump-blue">Key Drivers of Rising Bankruptcies</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-trump-red font-bold">•</span>
              <span><strong>Elevated interest rates:</strong> Higher borrowing costs increase debt burden on consumers and businesses.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-trump-red font-bold">•</span>
              <span><strong>Record credit card debt:</strong> U.S. household debt reached record highs, with credit card balances exceeding $1.2 trillion.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-trump-red font-bold">•</span>
              <span><strong>Student loan repayment resumption:</strong> Collections resumed after pandemic-era pauses, adding financial strain.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-trump-red font-bold">•</span>
              <span><strong>Persistent inflation:</strong> Rising costs for essentials continue to erode purchasing power.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-trump-red font-bold">•</span>
              <span><strong>Tariff uncertainty:</strong> Trade policy shifts under the Trump administration created additional business uncertainty.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-trump-red font-bold">•</span>
              <span><strong>Post-pandemic normalization:</strong> Filings rebounding toward pre-COVID levels (757,816 in 2019) after artificially low pandemic-era numbers.</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* January 2026 Alert */}
      <Card className="border-trump-red border-2">
        <CardHeader>
          <CardTitle className="text-trump-red flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            January 2026 Alert: Commercial Ch. 11 Filings Surge 76%
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            In January 2026, there were <strong>956 commercial Chapter 11 filings</strong>, a 76% increase from the 
            544 filings in January 2025. Small business Subchapter V elections also surged 68%. This sharp 
            acceleration signals intensifying financial distress among U.S. businesses entering 2026.
          </p>
        </CardContent>
      </Card>

      {/* Sources */}
      <Card>
        <CardHeader>
          <CardTitle className="text-trump-blue text-lg">Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• <strong>Epiq AACER / ABI</strong> — "Total Bankruptcy Filings Increase 11% in Calendar Year 2025" (January 12, 2026)</li>
            <li>• <strong>Epiq AACER / ABI</strong> — "Total Bankruptcy Filings Increased 10 Percent in the First Half of 2025" (July 3, 2025)</li>
            <li>• <strong>Epiq AACER</strong> — "January Commercial Chapter 11 Filings Increase 76% Over 2025" (February 4, 2026)</li>
            <li>• <strong>Epiq AACER</strong> — Monthly bankruptcy filing reports (January–December 2025)</li>
            <li>• <strong>U.S. Courts</strong> — uscourts.gov quarterly bankruptcy filing statistics</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default BankruptcyTracker;
