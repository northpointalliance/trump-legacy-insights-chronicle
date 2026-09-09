export type PresidentialTerm = 'first' | 'second';

export interface MarketData {
  id: number;
  /** Date of the decision or announcement. */
  date: string;
  /** Label shown on the chart and reaction cards. */
  event: string;
  /** One line on what markets were actually reacting to. */
  detail: string;
  /** Optional cross-reference into presidencyEvents.ts. */
  eventId?: number;
  /** Trading sessions used for the before/after comparison. */
  window: string;
  stockMarket: {
    before: number;
    after: number;
    percentChange: number;
  };
  dollarIndex: {
    before: number;
    after: number;
    percentChange: number;
  };
  treasuryYield: {
    before: number;
    after: number;
    change: number; // Basis points
  };
}

export interface TermSummaryStat {
  label: string;
  value: string;
  detail: string;
}

export interface TermSummary {
  window: string;
  stats: TermSummaryStat[];
  note: string;
}

// Stock market figures are Dow Jones Industrial Average closing levels (FRED
// series DJIA). Dollar figures are the ICE U.S. Dollar Index (DXY). Treasury
// figures are the 10-year constant maturity yield (FRED series DGS10). Where an
// announcement landed on a weekend, holiday, or after the closing bell, the
// "before" figure is the last close ahead of it and the window says so.

export const firstTermMarketReactions: MarketData[] = [
  {
    id: 1,
    date: '2017-01-20',
    event: 'Inauguration',
    detail: 'The week that carried the Dow above 20,000 for the first time, extending the post-election rally on expected tax cuts and deregulation.',
    eventId: 1,
    window: 'Jan 20 close to Jan 25 close, 2017',
    stockMarket: { before: 19827.25, after: 20068.51, percentChange: 1.22 },
    dollarIndex: { before: 100.74, after: 100.03, percentChange: -0.70 },
    treasuryYield: { before: 2.48, after: 2.53, change: 5 }
  },
  {
    id: 2,
    date: '2017-01-23',
    event: 'TPP Withdrawal',
    detail: 'The first formal break with a multilateral trade agreement, signed on the first full working day. Markets barely moved.',
    eventId: 2,
    window: 'Jan 20 close to Jan 23 close, 2017',
    stockMarket: { before: 19827.25, after: 19799.85, percentChange: -0.14 },
    dollarIndex: { before: 100.74, after: 100.16, percentChange: -0.58 },
    treasuryYield: { before: 2.48, after: 2.41, change: -7 }
  },
  {
    id: 3,
    date: '2017-12-22',
    event: 'Tax Cuts and Jobs Act Signed',
    detail: 'Cutting the corporate rate from 35% to 21% was the term\'s largest change to expected earnings, but the move had already happened: the Dow rose 5.8% in the six weeks before the signing.',
    eventId: 5,
    window: 'Dec 21 close to Dec 26 close, 2017',
    stockMarket: { before: 24782.29, after: 24746.21, percentChange: -0.15 },
    dollarIndex: { before: 93.28, after: 93.26, percentChange: -0.02 },
    treasuryYield: { before: 2.48, after: 2.47, change: -1 }
  },
  {
    id: 4,
    date: '2018-03-01',
    event: 'Steel and Aluminum Tariffs Announced',
    detail: 'Section 232 duties of 25% on steel and 10% on aluminum opened the first-term trade war and produced the year\'s clearest tariff selloff.',
    window: 'Feb 28 close to Mar 1 close, 2018',
    stockMarket: { before: 25029.20, after: 24608.98, percentChange: -1.68 },
    dollarIndex: { before: 90.61, after: 90.32, percentChange: -0.32 },
    treasuryYield: { before: 2.87, after: 2.81, change: -6 }
  },
  {
    id: 5,
    date: '2018-05-08',
    event: 'Iran Nuclear Deal Withdrawal',
    detail: 'Leaving the JCPOA lifted crude prices on renewed sanctions risk and nudged the 10-year yield above 3%.',
    eventId: 6,
    window: 'May 8 close to May 9 close, 2018',
    stockMarket: { before: 24360.21, after: 24542.54, percentChange: 0.75 },
    dollarIndex: { before: 93.12, after: 93.04, percentChange: -0.09 },
    treasuryYield: { before: 2.97, after: 3.00, change: 3 }
  },
  {
    id: 6,
    date: '2020-01-15',
    event: 'Phase One Trade Deal with China',
    detail: 'The truce that ended the first-term trade war, signed four weeks before the pandemic repriced every asset class.',
    eventId: 10,
    window: 'Jan 15 close to Jan 17 close, 2020',
    stockMarket: { before: 29030.22, after: 29348.10, percentChange: 1.09 },
    dollarIndex: { before: 97.23, after: 97.61, percentChange: 0.39 },
    treasuryYield: { before: 1.79, after: 1.84, change: 5 }
  },
  {
    id: 7,
    date: '2020-03-13',
    event: 'COVID-19 National Emergency Declared',
    detail: 'The declaration produced the Dow\'s best session since 2008, recovering about half of the previous day\'s 9.99% loss. Three sessions later it fell 12.93%, its worst day since 1987.',
    window: 'Mar 12 close to Mar 13 close, 2020',
    stockMarket: { before: 21200.62, after: 23185.62, percentChange: 9.36 },
    dollarIndex: { before: 97.47, after: 98.75, percentChange: 1.31 },
    treasuryYield: { before: 0.88, after: 0.94, change: 6 }
  },
  {
    id: 8,
    date: '2020-03-27',
    event: 'CARES Act Signed',
    detail: 'The $2.2 trillion relief package was signed after a three-session, 21.3% rally off the March 23 low. The signing session itself gave back 4.06%.',
    window: 'Mar 26 close to Mar 27 close, 2020',
    stockMarket: { before: 22552.17, after: 21636.78, percentChange: -4.06 },
    dollarIndex: { before: 99.42, after: 98.37, percentChange: -1.06 },
    treasuryYield: { before: 0.83, after: 0.72, change: -11 }
  }
];

export const secondTermMarketReactions: MarketData[] = [
  {
    id: 101,
    date: '2025-01-20',
    event: 'Second Inauguration',
    detail: 'Markets were closed on inauguration day. The next session rallied on relief that no blanket tariff increase arrived on day one.',
    eventId: 101,
    window: 'Jan 17 close to Jan 21 close, 2025 (markets closed Jan 20)',
    stockMarket: { before: 43487.83, after: 44025.81, percentChange: 1.24 },
    dollarIndex: { before: 109.35, after: 108.06, percentChange: -1.18 },
    treasuryYield: { before: 4.61, after: 4.57, change: -4 }
  },
  {
    id: 102,
    date: '2025-02-01',
    event: 'Canada, Mexico and China Tariff Orders',
    detail: 'Orders imposing 25% tariffs on Canada and Mexico and 10% on China. The Dow fell hard at the Monday open, then recovered most of it once both North American tariffs were paused for 30 days.',
    window: 'Jan 31 close to Feb 3 close, 2025 (orders signed Saturday)',
    stockMarket: { before: 44544.66, after: 44421.91, percentChange: -0.28 },
    dollarIndex: { before: 108.37, after: 108.99, percentChange: 0.57 },
    treasuryYield: { before: 4.58, after: 4.54, change: -4 }
  },
  {
    id: 103,
    date: '2025-04-02',
    event: '"Liberation Day" Reciprocal Tariffs',
    detail: 'Announced after the closing bell. The two sessions that followed were the largest two-day loss of U.S. market value on record, roughly $6.6 trillion.',
    window: 'Apr 2 close to Apr 4 close, 2025',
    stockMarket: { before: 42225.32, after: 38314.86, percentChange: -9.26 },
    dollarIndex: { before: 103.81, after: 103.02, percentChange: -0.76 },
    treasuryYield: { before: 4.20, after: 4.01, change: -19 }
  },
  {
    id: 104,
    date: '2025-04-09',
    event: '90-Day Tariff Pause',
    detail: 'Posted to Truth Social at 1:18 p.m. ET. The Dow\'s 7.87% gain was its best session since March 2020; the 10-year yield still rose more than 50 basis points that week.',
    window: 'Apr 8 close to Apr 9 close, 2025',
    stockMarket: { before: 37645.59, after: 40608.45, percentChange: 7.87 },
    dollarIndex: { before: 102.96, after: 102.90, percentChange: -0.06 },
    treasuryYield: { before: 4.26, after: 4.34, change: 8 }
  },
  {
    id: 105,
    date: '2025-05-12',
    event: 'U.S.–China Geneva De-escalation',
    detail: 'A joint statement cut U.S. tariffs on Chinese goods from 145% to 30% for 90 days, and Chinese tariffs on U.S. goods to 10%.',
    eventId: 103,
    window: 'May 9 close to May 12 close, 2025',
    stockMarket: { before: 41249.38, after: 42410.10, percentChange: 2.81 },
    dollarIndex: { before: 100.34, after: 101.79, percentChange: 1.45 },
    treasuryYield: { before: 4.37, after: 4.45, change: 8 }
  },
  {
    id: 106,
    date: '2025-07-04',
    event: 'One Big Beautiful Bill Act Signed',
    detail: 'Signed the day after the Dow set a record close. The next session gave back 0.94% as new tariff letters went out to Japan and South Korea.',
    eventId: 106,
    window: 'Jul 3 close to Jul 7 close, 2025 (markets closed Jul 4)',
    stockMarket: { before: 44828.53, after: 44406.36, percentChange: -0.94 },
    dollarIndex: { before: 97.18, after: 97.48, percentChange: 0.31 },
    treasuryYield: { before: 4.35, after: 4.40, change: 5 }
  },
  {
    id: 107,
    date: '2026-02-20',
    event: 'Supreme Court Strikes Down IEEPA Tariffs',
    detail: 'A 6–3 ruling held that the emergency powers act does not authorize tariffs, voiding levies that had already collected more than $160 billion. The Dow moved less than half a percent.',
    window: 'Feb 19 close to Feb 20 close, 2026',
    stockMarket: { before: 49395.16, after: 49625.97, percentChange: 0.47 },
    dollarIndex: { before: 97.93, after: 97.80, percentChange: -0.13 },
    treasuryYield: { before: 4.08, after: 4.08, change: 0 }
  },
  {
    id: 108,
    date: '2026-02-28',
    event: 'U.S.–Israeli Strikes on Iran',
    detail: 'Strikes began on a Saturday and shut the Strait of Hormuz. Over the following month the Dow gave up 7.78% and the 10-year yield rose 47 basis points as the oil shock lifted inflation expectations.',
    window: 'Feb 27 close to Mar 27 close, 2026 (drawdown window)',
    stockMarket: { before: 48977.92, after: 45166.64, percentChange: -7.78 },
    dollarIndex: { before: 97.61, after: 100.15, percentChange: 2.60 },
    treasuryYield: { before: 3.97, after: 4.44, change: 47 }
  },
  {
    id: 109,
    date: '2026-04-08',
    event: 'U.S.–Iran Ceasefire',
    detail: 'A two-week ceasefire reopened the Strait of Hormuz. WTI crude fell 16.4%, its largest one-day drop since 2020, and the Dow posted its best session since April 2025.',
    window: 'Apr 7 close to Apr 8 close, 2026',
    stockMarket: { before: 46584.46, after: 47909.92, percentChange: 2.85 },
    dollarIndex: { before: 99.64, after: 99.13, percentChange: -0.51 },
    treasuryYield: { before: 4.33, after: 4.29, change: -4 }
  }
];

export const termSummaries: Record<PresidentialTerm, TermSummary> = {
  first: {
    window: 'Jan 20, 2017 close to Jan 19, 2021 close',
    stats: [
      { label: 'Dow Jones', value: '+56.0%', detail: '19,827.25 to 30,930.52' },
      { label: 'Dollar Index', value: '-10.2%', detail: '100.74 to 90.50' },
      { label: '10-Year Yield', value: '-138 bp', detail: '2.48% to 1.10%' }
    ],
    note: 'The defining move of the term was the pandemic rather than any policy decision. The Dow fell 37.1% from its February 12, 2020 record close of 29,551.42 to its March 23, 2020 trough of 18,591.93, then finished the term 4.7% above that pre-pandemic peak.'
  },
  second: {
    window: 'Jan 17, 2025 close to Sep 8, 2026 close',
    stats: [
      { label: 'Dow Jones', value: '+21.4%', detail: '43,487.83 to 52,786.07' },
      { label: 'Dollar Index', value: '-9.7%', detail: '109.35 to 98.75' },
      { label: '10-Year Yield', value: '+17 bp', detail: '4.61% to 4.78%' }
    ],
    note: 'Two shocks dominate the term so far, and both were reversed. The April 2025 reciprocal tariffs cost the Dow 10.85% in four sessions before the 90-day pause, and the Supreme Court struck those tariffs down in February 2026. The dollar index fell 10.2% across calendar 2025. The Dow\'s record close is 54,349.12, set August 5, 2026.'
  }
};

export const marketReactionsByTerm: Record<PresidentialTerm, MarketData[]> = {
  first: firstTermMarketReactions,
  second: secondTermMarketReactions
};

/** Back-compat alias for the original first-term dataset. */
export const marketReactions = firstTermMarketReactions;
