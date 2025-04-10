
export interface MarketData {
  id: number;
  date: string;
  eventId: number; // References the presidencyEvents.ts id
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

export const marketReactions: MarketData[] = [
  {
    id: 1,
    date: '2017-01-20',
    eventId: 1, // Inauguration
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
    eventId: 2, // TPP Withdrawal
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
    eventId: 5, // Tax Cuts
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
    eventId: 6, // Iran Deal Withdrawal
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
    eventId: 10, // China Trade Deal
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
