
export interface TurnoverPosition {
  id: number;
  position: string;
  name: string;
  startDate: string;
  endDate: string | null;
  daysInOffice: number | null;
  reason: 'Resigned' | 'Fired' | 'Promoted' | 'Transferred' | 'Still in office' | 'Other';
  department: string;
}

// Data sourced from Brookings Institution
// https://www.brookings.edu/articles/tracking-turnover-in-the-trump-administration/
export const cabinetTurnover: TurnoverPosition[] = [
  {
    id: 1,
    position: "Secretary of State",
    name: "Rex Tillerson",
    startDate: "2017-02-01",
    endDate: "2018-03-31",
    daysInOffice: 424,
    reason: "Fired",
    department: "State Department"
  },
  {
    id: 2,
    position: "Secretary of State",
    name: "Mike Pompeo",
    startDate: "2018-04-26",
    endDate: "2021-01-20",
    daysInOffice: 1000,
    reason: "Other",
    department: "State Department"
  },
  {
    id: 3,
    position: "Secretary of Defense",
    name: "James Mattis",
    startDate: "2017-01-20",
    endDate: "2018-12-31",
    daysInOffice: 710,
    reason: "Resigned",
    department: "Defense Department"
  },
  {
    id: 4,
    position: "Secretary of Defense",
    name: "Mark Esper",
    startDate: "2019-07-23",
    endDate: "2020-11-09",
    daysInOffice: 475,
    reason: "Fired",
    department: "Defense Department"
  },
  {
    id: 5,
    position: "Attorney General",
    name: "Jeff Sessions",
    startDate: "2017-02-08",
    endDate: "2018-11-07",
    daysInOffice: 637,
    reason: "Resigned",
    department: "Justice Department"
  },
  {
    id: 6,
    position: "Attorney General",
    name: "William Barr",
    startDate: "2019-02-14",
    endDate: "2020-12-23",
    daysInOffice: 678,
    reason: "Resigned",
    department: "Justice Department"
  },
  {
    id: 7,
    position: "Chief of Staff",
    name: "Reince Priebus",
    startDate: "2017-01-20",
    endDate: "2017-07-31",
    daysInOffice: 192,
    reason: "Resigned",
    department: "White House"
  },
  {
    id: 8,
    position: "Chief of Staff",
    name: "John Kelly",
    startDate: "2017-07-31",
    endDate: "2019-01-02",
    daysInOffice: 520,
    reason: "Resigned",
    department: "White House"
  },
  {
    id: 9,
    position: "Chief of Staff",
    name: "Mick Mulvaney (Acting)",
    startDate: "2019-01-02",
    endDate: "2020-03-31",
    daysInOffice: 454,
    reason: "Transferred",
    department: "White House"
  },
  {
    id: 10,
    position: "Chief of Staff",
    name: "Mark Meadows",
    startDate: "2020-03-31",
    endDate: "2021-01-20",
    daysInOffice: 295,
    reason: "Other",
    department: "White House"
  },
  {
    id: 11,
    position: "National Security Advisor",
    name: "Michael Flynn",
    startDate: "2017-01-20",
    endDate: "2017-02-13",
    daysInOffice: 24,
    reason: "Resigned",
    department: "White House"
  },
  {
    id: 12,
    position: "National Security Advisor",
    name: "H.R. McMaster",
    startDate: "2017-02-20",
    endDate: "2018-04-09",
    daysInOffice: 413,
    reason: "Resigned",
    department: "White House"
  },
  {
    id: 13,
    position: "National Security Advisor",
    name: "John Bolton",
    startDate: "2018-04-09",
    endDate: "2019-09-10",
    daysInOffice: 519,
    reason: "Fired",
    department: "White House"
  },
  {
    id: 14,
    position: "National Security Advisor",
    name: "Robert O'Brien",
    startDate: "2019-09-18",
    endDate: "2021-01-20",
    daysInOffice: 490,
    reason: "Other",
    department: "White House"
  },
  {
    id: 15,
    position: "Press Secretary",
    name: "Sean Spicer",
    startDate: "2017-01-20",
    endDate: "2017-07-21",
    daysInOffice: 182,
    reason: "Resigned",
    department: "White House"
  }
];

// Adding cabinet picks for second term (as of April 2025)
export const secondTermCabinet: TurnoverPosition[] = [
  {
    id: 101,
    position: "Secretary of State",
    name: "Marco Rubio",
    startDate: "2025-01-20",
    endDate: null,
    daysInOffice: null,
    reason: "Still in office",
    department: "State Department"
  },
  {
    id: 102,
    position: "Attorney General",
    name: "Matt Gaetz",
    startDate: "2025-01-20",
    endDate: null,
    daysInOffice: null,
    reason: "Still in office",
    department: "Justice Department"
  },
  {
    id: 103,
    position: "Secretary of Defense",
    name: "Pete Hegseth",
    startDate: "2025-01-20",
    endDate: null,
    daysInOffice: null,
    reason: "Still in office",
    department: "Defense Department"
  },
  {
    id: 104,
    position: "Secretary of Health and Human Services",
    name: "Robert F. Kennedy Jr.",
    startDate: "2025-01-20",
    endDate: null,
    daysInOffice: null,
    reason: "Still in office",
    department: "Health and Human Services"
  },
  {
    id: 105,
    position: "Chief of Staff",
    name: "Susie Wiles",
    startDate: "2025-01-20",
    endDate: null,
    daysInOffice: null,
    reason: "Still in office",
    department: "White House"
  }
];
