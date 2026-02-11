import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ArrowDownRight, Info, Globe, TrendingDown, Plane } from 'lucide-react';
import { ChartContainer } from '@/components/ui/chart';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const travelData = [
  { month: 'Nov 2024', visitors: 5.8, yoyChange: 0 },
  { month: 'Dec 2024', visitors: 5.5, yoyChange: 0 },
  { month: 'Jan 2025', visitors: 4.9, yoyChange: -3.2 },
  { month: 'Feb 2025', visitors: 4.7, yoyChange: -4.1 },
  { month: 'Mar 2025', visitors: 4.8, yoyChange: -3.8 },
  { month: 'Apr 2025', visitors: 4.5, yoyChange: -5.0 },
  { month: 'May 2025', visitors: 5.0, yoyChange: -4.5 },
  { month: 'Jun 2025', visitors: 5.4, yoyChange: -3.9 },
  { month: 'Jul 2025', visitors: 5.6, yoyChange: -3.5 },
  { month: 'Aug 2025', visitors: 5.5, yoyChange: -3.2 },
  { month: 'Sep 2025', visitors: 5.0, yoyChange: -4.0 },
  { month: 'Oct 2025', visitors: 5.1, yoyChange: -3.6 },
  { month: 'Nov 2025', visitors: 5.2, yoyChange: -4.8 },
  { month: 'Dec 2025', visitors: 5.3, yoyChange: -2.9 },
];

const regionData = [
  { region: 'Canada', change: -11.9, visitors: 2.4, unit: 'M (Dec)' },
  { region: 'United Kingdom', change: -5.6, visitors: 1.6, unit: 'M (Dec)' },
  { region: 'Germany', change: -6.2, visitors: 0.4, unit: 'M (Dec)' },
  { region: 'India', change: -4.8, visitors: 0.3, unit: 'M (Dec)' },
  { region: 'South Korea', change: -5.1, visitors: 0.3, unit: 'M (Dec)' },
  { region: 'Mexico', change: -0.1, visitors: 4.0, unit: 'M (Dec)' },
  { region: 'Japan', change: 8.9, visitors: 0.9, unit: 'M (Dec)' },
  { region: 'Dominican Rep.', change: 6.8, visitors: 1.0, unit: 'M (Dec)' },
];

const globalComparison = [
  { country: 'France', visitors: 105, change: '+4%' },
  { country: 'Spain', visitors: 96, change: '+6%' },
  { country: 'United States', visitors: 68, change: '-6%' },
  { country: 'Italy', visitors: 57, change: '+3%' },
  { country: 'Japan', visitors: 36, change: '+12%' },
];

const ForeignTravelersData = () => {
  const peakVisitors = travelData[0].visitors;
  const latestVisitors = travelData[travelData.length - 1].visitors;
  const overallDecline = ((peakVisitors - latestVisitors) / peakVisitors * 100).toFixed(1);

  const chartConfig = {
    visitors: {
      label: 'Foreign Visitors (millions)',
      color: '#ef4444',
    },
  };

  return (
    <section id="foreign-travelers" className="py-8 space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-trump-blue mb-2 flex items-center justify-center gap-2">
          <Plane className="h-8 w-8 text-trump-red" />
          Foreign Travel Decline to the U.S.
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          International visits to the U.S. declined for 8 consecutive months through December 2025.
          The U.S. saw a 6% drop in foreign visitors while global tourism spending rose over 6%.
        </p>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-sm text-muted-foreground">2025 Foreign Visitors</p>
            <p className="text-3xl font-bold text-trump-blue">~68M</p>
            <p className="text-sm text-trump-red flex items-center justify-center gap-1 mt-1">
              <TrendingDown className="h-4 w-4" /> -6% vs 2024
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-sm text-muted-foreground">Overseas Visitation (YTD Dec)</p>
            <p className="text-3xl font-bold text-trump-blue">-2.5%</p>
            <p className="text-sm text-muted-foreground">vs same period 2024</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-sm text-muted-foreground">Tourism Spending Drop</p>
            <p className="text-3xl font-bold text-trump-red">-7%</p>
            <p className="text-sm text-muted-foreground">Foreign spending in U.S.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-sm text-muted-foreground">Consecutive Months Decline</p>
            <p className="text-3xl font-bold text-trump-red">8</p>
            <p className="text-sm text-muted-foreground">May–Dec 2025</p>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Trend Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Key Findings
              <ArrowDownRight className="h-5 w-5 text-trump-red" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                <p className="font-semibold text-trump-red">8 Straight Months of Decline</p>
                <p className="text-gray-700 mt-1">Foreign visits dropped every month from May through December 2025.</p>
              </div>
              <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                <p className="font-semibold text-trump-red">Canada Down 11.9%</p>
                <p className="text-gray-700 mt-1">Largest decline from any single market in December 2025 YoY.</p>
              </div>
              <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                <p className="font-semibold text-trump-red">Global Tourism Grew 6%</p>
                <p className="text-gray-700 mt-1">While U.S. inbound travel fell, global tourism spending hit $11.7 trillion.</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <p className="font-semibold text-trump-blue">Pre-Pandemic Recovery Stalled</p>
                <p className="text-gray-700 mt-1">December arrivals reached only 93.8% of pre-pandemic (2019) levels.</p>
              </div>
              <div className="flex items-center text-muted-foreground mt-2">
                <Info className="h-4 w-4 mr-1" />
                <span>Data: NTTO / U.S. Dept. of Commerce (through Dec 2025)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Monthly Non-Citizen Air Arrivals (Millions)</CardTitle>
            <CardDescription>Nov 2024 – Dec 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[350px]">
              <ChartContainer config={chartConfig}>
                <AreaChart data={travelData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} angle={-45} textAnchor="end" height={70} />
                  <YAxis domain={[3.5, 6.5]} />
                  <Tooltip formatter={(value: number) => [`${value} million`, 'Visitors']} />
                  <Area
                    type="monotone"
                    dataKey="visitors"
                    name="visitors"
                    stroke="#c62828"
                    fill="#c62828"
                    fillOpacity={0.15}
                  />
                </AreaChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Regional Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-trump-blue flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Arrivals by Country (Dec 2025 YoY)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Country</TableHead>
                  <TableHead className="text-right">Air Passengers</TableHead>
                  <TableHead className="text-right">YoY Change</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {regionData.map((row) => (
                  <TableRow key={row.region}>
                    <TableCell className="font-medium">{row.region}</TableCell>
                    <TableCell className="text-right">{row.visitors}{row.unit}</TableCell>
                    <TableCell className={`text-right font-semibold ${row.change < 0 ? 'text-trump-red' : 'text-green-600'}`}>
                      {row.change > 0 ? '+' : ''}{row.change}%
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-trump-blue">Global Comparison: 2025 Visitors (Millions)</CardTitle>
            <CardDescription>U.S. declined while competitors surged</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Country</TableHead>
                  <TableHead className="text-right">Visitors (M)</TableHead>
                  <TableHead className="text-right">YoY Change</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {globalComparison.map((row) => (
                  <TableRow key={row.country} className={row.country === 'United States' ? 'bg-red-50 font-semibold' : ''}>
                    <TableCell className="font-medium">{row.country}</TableCell>
                    <TableCell className="text-right">{row.visitors}M</TableCell>
                    <TableCell className={`text-right font-semibold ${row.change.startsWith('-') ? 'text-trump-red' : 'text-green-600'}`}>
                      {row.change}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <p className="mt-4 text-sm text-muted-foreground italic">
              France and Spain each received more international visitors than the U.S. in 2025.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Contributing Factors */}
      <Card>
        <CardHeader>
          <CardTitle className="text-trump-blue">Contributing Factors</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-trump-red font-bold">•</span>
              <span><strong>Stricter visa & border policies:</strong> Higher visa costs, longer processing times, and concerns about U.S. border enforcement deterred visitors, especially from non-Visa Waiver Program countries.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-trump-red font-bold">•</span>
              <span><strong>Canadian travel plunge:</strong> Canada saw the steepest decline (-11.9% in December), driven by political tensions and boycott sentiment over trade disputes and tariff threats.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-trump-red font-bold">•</span>
              <span><strong>Strong U.S. dollar:</strong> The dollar's strength made the U.S. more expensive for international visitors, pushing tourists toward cheaper European and Asian destinations.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-trump-red font-bold">•</span>
              <span><strong>Immigration policy perception:</strong> Social media screening requirements and expanded ESTA restrictions created uncertainty and negative perception among potential travelers.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-trump-red font-bold">•</span>
              <span><strong>Global competition:</strong> European destinations aggressively marketed to attract tourists, with France (105M) and Spain (96M) setting records while the U.S. fell behind.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-trump-red font-bold">•</span>
              <span><strong>Tariff uncertainty:</strong> Trade tensions raised travel costs and reduced goodwill from key markets including the UK (-5.6%) and Germany (-6.2%).</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Economic Impact */}
      <Card className="border-trump-red border-2">
        <CardHeader>
          <CardTitle className="text-trump-red flex items-center gap-2">
            <TrendingDown className="h-5 w-5" />
            Economic Impact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-gray-700">
            <p>
              Foreign tourist spending in the U.S. <strong>fell an estimated 7%</strong> in 2025, while American outbound 
              travel spending increased 30.3% above 2019 levels. This widened the U.S. travel trade deficit — Americans 
              spent more abroad than foreign visitors spent in the U.S.
            </p>
            <p>
              The U.S. Travel Association warned that international visitors account for a <strong>disproportionate share 
              of tourism spending</strong>, with higher average per-trip spend on lodging, dining, and retail compared to 
              domestic travelers. Gateway cities (NYC, Miami, LA, San Francisco) and convention-driven markets like 
              Las Vegas are most affected.
            </p>
            <p>
              PBS News reported that <strong>Las Vegas tourism experienced a notable slump</strong>, with fewer visitors 
              than prior years, attributed partly to tariff uncertainty and immigration crackdown concerns.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Sources */}
      <Card>
        <CardHeader>
          <CardTitle className="text-trump-blue text-lg">Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• <strong>NTTO / U.S. Dept. of Commerce</strong> — "December 2025 International Air Passenger Travel" (trade.gov)</li>
            <li>• <strong>World Travel & Tourism Council (WTTC)</strong> — Global Travel & Tourism Report 2025</li>
            <li>• <strong>Reuters</strong> — "Fewer foreigners visited U.S. in 2025 as global tourism spending rose" (Jan 14, 2026)</li>
            <li>• <strong>Business Insider</strong> — "International travel to the US keeps sliding: Visits fell for the 8th straight month" (Jan 17, 2026)</li>
            <li>• <strong>Travel Noire</strong> — "Global Tourism Surges — But Fewer Travelers Are Choosing The U.S." (Jan 27, 2026)</li>
            <li>• <strong>Tourism Economics</strong> — U.S. International Inbound Travel Outlook 2025</li>
            <li>• <strong>U.S. Travel Association</strong> — Travel Snapshot & International Inbound Reports</li>
            <li>• <strong>PBS News</strong> — Las Vegas Tourism Slump Report (2025)</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default ForeignTravelersData;
