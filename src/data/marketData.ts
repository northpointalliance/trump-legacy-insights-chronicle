export type PresidentialTerm = 'first' | 'second';

export interface MarketData {
  id: number;
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

// Stock market figures are Dow Jones Industrial Average closing levels.
// Dollar figures are the ICE U.S. Dollar Index (DXY). Treasury figures are the
// 10-year constant maturity yield.

export const firstTermMarketReactions: MarketData[] = [
  {
    id: 1,
    date: '2017-01-20',
    event: 'Inauguration',
    detail: 'Markets extended the post-election "Trump trade" on expectations of tax cuts and deregulation.',
    eventId: 1,
    window: 'Jan 20 close to Jan 25 close, 2017',
    stockMarket: {
      before: 19827.25,
      after: 20093.78,
      percentChange: 1.34
    },
    dollarIndex: {
      before: 101.18,
      after: 100.74,
      percentChange: -0.44
    },
    treasuryYield: {
      before: 2.48,
      after: 2.46,
      change: -2
    }
  },
  {
    id: 2,
    date: '2017-01-23',
    event: 'TPP Withdrawal',
    detail: 'The first formal break with a multilateral trade agreement, signed on the first full working day.',
    eventId: 2,
    window: 'Jan 20 close to Jan 23 close, 2017',
    stockMarket: {
      before: 19827.25,
      after: 19799.85,
      percentChange: -0.14
    },
    dollarIndex: {
      before: 100.74,
      after: 100.23,
      percentChange: -0.51
    },
    treasuryYield: {
      before: 2.46,
      after: 2.41,
      change: -5
    }
  },
  {
    id: 3,
    date: '2017-12-22',
    event: 'Tax Cuts and Jobs Act',
    detail: 'The corporate rate cut from 35% to 21% was the term\'s largest single boost to expected earnings.',
    eventId: 5,
    window: 'Dec 21 close to Dec 26 close, 2017',
    stockMarket: {
      before: 24782.29,
      after: 25075.13,
      percentChange: 1.18
    },
    dollarIndex: {
      before: 93.35,
      after: 92.83,
      percentChange: -0.56
    },
    treasuryYield: {
      before: 2.48,
      after: 2.58,
      change: 10
    }
  },
  {
    id: 4,
    date: '2018-05-08',
    event: 'Iran Nuclear Deal Withdrawal',
    detail: 'Withdrawal from the JCPOA lifted crude prices and the dollar on renewed sanctions risk.',
    eventId: 6,
    window: 'May 8 close to May 9 close, 2018',
    stockMarket: {
      before: 24357.32,
      after: 24542.54,
      percentChange: 0.76
    },
    dollarIndex: {
      before: 92.57,
      after: 93.24,
      percentChange: 0.72
    },
    treasuryYield: {
      before: 2.95,
      after: 3.01,
      change: 6
    }
  },
  {
    id: 5,
    date: '2020-01-15',
    event: 'Phase One Trade Deal with China',
    detail: 'The truce that ended the first-term trade war, weeks before the pandemic repriced everything.',
    eventId: 10,
    window: 'Jan 15 close to Jan 17 close, 2020',
    stockMarket: {
      before: 28939.67,
      after: 29348.10,
      percentChange: 1.41
    },
    dollarIndex: {
      before: 97.08,
      after: 97.54,
      percentChange: 0.47
    },
    treasuryYield: {
      before: 1.78,
      after: 1.84,
      change: 6
    }
  }
];

export const secondTermMarketReactions: MarketData[] = [];

/** Back-compat alias for the original first-term dataset. */
export const marketReactions = firstTermMarketReactions;

export const marketReactionsByTerm: Record<PresidentialTerm, MarketData[]> = {
  first: firstTermMarketReactions,
  second: secondTermMarketReactions
};
