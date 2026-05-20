import React from 'react';
import Header from '@/components/Header';
import SEO from '@/components/SEO';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Row {
  category: string;
  c115: string;
  c116: string;
  total: string;
}

const rows: Row[] = [
  { category: 'Total Departures', c115: '118 (House 104 + Senate 14)', c116: '72 (House 64 + Senate 8)', total: '190' },
  { category: 'In-Term Departures (resignations, deaths, etc.)', c115: '21 (House 16 + Senate 5)', c116: '12 (House 11 + Senate 1)', total: '33' },
  { category: 'Complete-Term Departures (retirements, defeats, other office)', c115: '97 (House 88 + Senate 9)', c116: '60 (House 53 + Senate 7)', total: '157' },
  { category: 'Resignations (mid-term)', c115: '~19 (House 15 + Senate 4)', c116: '~9 (House 8 + Senate 1)', total: '~28' },
  { category: 'Retirements (not seeking re-election)', c115: '~35 (House 32 + Senate 3)', c116: '~32 (House 28 + Senate 4)', total: '~67' },
];

const notableSenate = [
  { name: 'Jeff Sessions (R-AL)', reason: 'Resigned to become U.S. Attorney General' },
  { name: 'Al Franken (D-MN)', reason: 'Resigned amid misconduct allegations' },
  { name: 'Thad Cochran (R-MS)', reason: 'Resigned due to health' },
  { name: 'Jon Kyl (R-AZ)', reason: 'Appointed to fill McCain vacancy, later stepped down' },
];

const notableHouse = [
  { name: 'Tom Price (R-GA)', reason: 'Resigned to join Trump administration (HHS Secretary)' },
  { name: 'Mick Mulvaney (R-SC)', reason: 'Resigned to join administration (OMB Director)' },
  { name: 'Trent Franks (R-AZ)', reason: 'Resigned amid scandal' },
  { name: 'Blake Farenthold (R-TX)', reason: 'Resigned amid harassment scandal' },
  { name: 'John Conyers (D-MI)', reason: 'Resigned amid harassment allegations' },
  { name: 'Justin Amash (R→I, MI)', reason: 'Left GOP in 2019 over intra-party tensions' },
];

const CongressionalDepartures = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Congressional Departures During Trump's First Term (2017–2021)",
    description:
      'Comprehensive overview of resignations, retirements, and other departures from the 115th and 116th Congresses during Donald Trump\'s first term.',
    author: { '@type': 'Organization', name: 'Trump Legacy Insights Chronicle' },
    datePublished: '2026-05-20',
    mainEntityOfPage: 'https://trump-legacy-insights-chronicle.lovable.app/congressional-departures',
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "How many members of Congress departed during Trump's first term (2017–2021)?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Approximately 190 total departures across the 115th and 116th Congresses, including roughly 28 mid-term resignations and 67 retirements (members not seeking re-election).',
        },
      },
      {
        '@type': 'Question',
        name: 'How many Republicans retired from Congress before the 2018 midterms?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'About 34 House Republicans announced they would not seek re-election ahead of the 2018 midterms, contributing to Democratic gains that cycle.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which senators resigned during Trump\'s first term?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Notable Senate resignations included Jeff Sessions (R-AL, to become Attorney General), Al Franken (D-MN), and Thad Cochran (R-MS) for health reasons.',
        },
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-trump-gray">
      <SEO
        title="Congressional Departures During Trump's First Term (2017–2021)"
        description="Resignations, retirements, and turnover in the 115th and 116th Congresses during Donald Trump's first term — totals, party context, and notable examples."
        path="/congressional-departures"
        type="article"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <article>
          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-trump-blue mb-4">
              Congressional Departures During Trump's First Term
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resignations, retirements, and turnover across the 115th (2017–2019) and 116th (2019–2021) Congresses.
            </p>
          </header>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>
                During Donald Trump's first term, Congress saw substantial turnover — driven by
                resignations (scandals, administration appointments, health), record retirements
                ahead of the 2018 midterms, deaths, electoral defeats, and members running for
                other offices.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <p>
                The query emphasizes voluntary exits — particularly Republicans who chose not to
                seek re-election amid intra-party tensions and a competitive 2018 environment.
                Data is aggregated primarily from Congressional Research Service (CRS) summaries
                and the "Changes in membership" sections of the 115th and 116th Congresses.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Summary Table — House + Senate Combined</CardTitle>
              <CardDescription>Aggregate departures by category and Congress.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>115th Congress (2017–2018)</TableHead>
                    <TableHead>116th Congress (2019–2020)</TableHead>
                    <TableHead>Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rows.map((r) => (
                    <TableRow key={r.category}>
                      <TableCell className="font-medium">{r.category}</TableCell>
                      <TableCell>{r.c115}</TableCell>
                      <TableCell>{r.c116}</TableCell>
                      <TableCell className="font-bold text-trump-blue">{r.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p className="text-sm text-muted-foreground mt-4">
                Totals are CRS aggregates and include House Delegates and the Resident
                Commissioner. Many "retirements" were strategic — driven by tough re-election
                prospects in the 2018 midterms — with Republicans accounting for a disproportionate
                share of voluntary exits in the 115th cycle.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Senate — Notable Departures</CardTitle>
                <CardDescription>Fewer departures overall than the House.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {notableSenate.map((p) => (
                    <li key={p.name} className="border-b pb-2 last:border-0">
                      <div className="font-semibold">{p.name}</div>
                      <div className="text-sm text-gray-600">{p.reason}</div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>House — Notable Departures</CardTitle>
                <CardDescription>Higher turnover, including scandals and administration moves.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {notableHouse.map((p) => (
                    <li key={p.name} className="border-b pb-2 last:border-0">
                      <div className="font-semibold">{p.name}</div>
                      <div className="text-sm text-gray-600">{p.reason}</div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Party Breakdown & "Retire from GOP" Context</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <p>
                <Badge className="mr-2 bg-trump-red">GOP</Badge>
                A significant share of voluntary exits were Republicans, especially in the lead-up
                to the 2018 midterms — about 34 House Republicans announced they would not seek
                re-election, contributing to Democratic gains.
              </p>
              <p>
                Most departures were driven by standard factors — age, family, scandals, or
                electoral math — rather than explicit party switches. The most prominent party
                exit was Justin Amash (R-MI), who left the GOP for Independent (and later
                Libertarian) status in 2019–2020 over clashes with Trump-aligned factions.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  <a
                    href="https://crsreports.congress.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-trump-blue hover:underline"
                  >
                    Congressional Research Service (CRS) — Membership of the 115th and 116th Congresses
                  </a>
                </li>
                <li>
                  <a
                    href="https://en.wikipedia.org/wiki/List_of_changes_in_membership_of_the_United_States_Congress_during_the_115th_Congress"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-trump-blue hover:underline"
                  >
                    Changes in membership of the 115th Congress (Wikipedia)
                  </a>
                </li>
                <li>
                  <a
                    href="https://en.wikipedia.org/wiki/List_of_changes_in_membership_of_the_United_States_Congress_during_the_116th_Congress"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-trump-blue hover:underline"
                  >
                    Changes in membership of the 116th Congress (Wikipedia)
                  </a>
                </li>
                <li>
                  <a
                    href="https://bioguide.congress.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-trump-blue hover:underline"
                  >
                    Biographical Directory of the United States Congress
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </article>
      </main>

      <Footer className="mt-12" />
    </div>
  );
};

export default CongressionalDepartures;
