
export interface PresidencyEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  category: 'policy' | 'international' | 'economic' | 'legal' | 'political';
  impact: 'high' | 'medium' | 'low';
}

// Sample data from first presidency
export const firstTermEvents: PresidencyEvent[] = [
  {
    id: 1,
    date: '2017-01-20',
    title: 'Inauguration',
    description: 'Donald Trump sworn in as the 45th President of the United States.',
    category: 'political',
    impact: 'high'
  },
  {
    id: 2,
    date: '2017-01-23',
    title: 'TPP Withdrawal',
    description: 'Withdrew from the Trans-Pacific Partnership (TPP) trade deal.',
    category: 'international',
    impact: 'high'
  },
  {
    id: 3,
    date: '2017-01-27',
    title: 'Travel Ban',
    description: 'Executive Order 13769 banned travel from seven Muslim-majority countries.',
    category: 'policy',
    impact: 'high'
  },
  {
    id: 4,
    date: '2017-06-01',
    title: 'Paris Climate Accord Withdrawal',
    description: 'Announced the U.S. withdrawal from the Paris Climate Agreement.',
    category: 'international',
    impact: 'high'
  },
  {
    id: 5,
    date: '2017-12-22',
    title: 'Tax Cuts and Jobs Act',
    description: 'Signed the Tax Cuts and Jobs Act, significantly reducing corporate tax rates.',
    category: 'economic',
    impact: 'high'
  },
  {
    id: 6,
    date: '2018-05-08',
    title: 'Iran Nuclear Deal Withdrawal',
    description: 'Withdrew from the Iran Nuclear Deal (JCPOA).',
    category: 'international',
    impact: 'high'
  },
  {
    id: 7,
    date: '2018-06-12',
    title: 'North Korea Summit',
    description: 'First U.S.-North Korea Summit in Singapore with Kim Jong-un.',
    category: 'international',
    impact: 'medium'
  },
  {
    id: 8,
    date: '2019-01-25',
    title: 'Government Shutdown Ends',
    description: 'Longest government shutdown in history (35 days) over border wall funding ends.',
    category: 'political',
    impact: 'medium'
  },
  {
    id: 9,
    date: '2019-12-18',
    title: 'First Impeachment',
    description: 'House of Representatives impeached Trump on charges of abuse of power and obstruction of Congress.',
    category: 'legal',
    impact: 'high'
  },
  {
    id: 10,
    date: '2020-01-15',
    title: 'Phase One Trade Deal with China',
    description: 'Signed "Phase One" trade agreement with China after prolonged trade war.',
    category: 'economic',
    impact: 'high'
  }
];

// Placeholder for second term events
export const secondTermEvents: PresidencyEvent[] = [
  {
    id: 101,
    date: '2025-01-20',
    title: 'Second Inauguration',
    description: 'Donald Trump sworn in as the 47th President of the United States.',
    category: 'political',
    impact: 'high'
  },
  // More events will be added as the second term progresses
];
