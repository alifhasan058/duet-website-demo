export type RegionName = 'All' | 'Northeast' | 'Midwest' | 'South' | 'West';

export interface ClinicEntry {
  name: string;
  city: string;
  leadNp: string;
  focus: string;
}

export interface NetworkState {
  code: string;
  name: string;
  region: Exclude<RegionName, 'All'>;
  clinicCount: number;
  patientsApprox: string;
  clinics: ClinicEntry[];
}

export const NETWORK_STATES: NetworkState[] = [
  {
    code: 'AZ',
    name: 'Arizona',
    region: 'West',
    clinicCount: 8,
    patientsApprox: '9,400',
    clinics: [
      { name: 'Ramirez Family Health', city: 'Tucson, AZ', leadNp: 'Elena Ramirez, DNP, APRN', focus: 'Family & preventive care' },
      { name: 'Sonoran Primary Care', city: 'Mesa, AZ', leadNp: 'David Morales, FNP-C', focus: 'Chronic care & bilingual outreach' },
    ],
  },
  {
    code: 'CO',
    name: 'Colorado',
    region: 'West',
    clinicCount: 6,
    patientsApprox: '7,100',
    clinics: [
      { name: 'Front Range Nurse Practice', city: 'Lakewood, CO', leadNp: 'Hannah Brooks, MSN, FNP-BC', focus: 'Preventive & adult primary care' },
      { name: 'Aspen Valley Family Clinic', city: 'Colorado Springs, CO', leadNp: 'Lucas Bennett, DNP, FNP-C', focus: 'Same-week primary care' },
    ],
  },
  {
    code: 'FL',
    name: 'Florida',
    region: 'South',
    clinicCount: 10,
    patientsApprox: '12,200',
    clinics: [
      { name: 'Bayside NP Primary Care', city: 'Tampa, FL', leadNp: 'Camila Navarro, APRN, FNP-C', focus: 'Senior & cardiometabolic care' },
      { name: 'Palm Coast Family Health', city: 'Jacksonville, FL', leadNp: 'Trevor Grant, MSN, APRN', focus: 'Chronic disease continuity' },
    ],
  },
  {
    code: 'GA',
    name: 'Georgia',
    region: 'South',
    clinicCount: 5,
    patientsApprox: '5,800',
    clinics: [
      { name: 'Peachtree Community Primary', city: 'Decatur, GA', leadNp: 'Nadia Foster, DNP, FNP-BC', focus: 'Women’s & family medicine' },
      { name: 'Savannah River Care Clinic', city: 'Savannah, GA', leadNp: 'Rachel Kim, MSN, APRN', focus: 'Preventive screenings' },
    ],
  },
  {
    code: 'IL',
    name: 'Illinois',
    region: 'Midwest',
    clinicCount: 7,
    patientsApprox: '8,300',
    clinics: [
      { name: 'Oak Park Nurse-Led Care', city: 'Oak Park, IL', leadNp: 'Priya Patel, MSN, APRN', focus: 'Family care & diabetes management' },
      { name: 'Prairie View Primary Clinic', city: 'Peoria, IL', leadNp: 'Jordan Hayes, FNP-C', focus: 'Rural & suburban access' },
    ],
  },
  {
    code: 'IN',
    name: 'Indiana',
    region: 'Midwest',
    clinicCount: 4,
    patientsApprox: '4,600',
    clinics: [
      { name: 'White River Family Health', city: 'Carmel, IN', leadNp: 'Lauren Miller, DNP, FNP-C', focus: 'Pediatric to adult primary care' },
    ],
  },
  {
    code: 'MA',
    name: 'Massachusetts',
    region: 'Northeast',
    clinicCount: 7,
    patientsApprox: '8,900',
    clinics: [
      { name: 'Charles River Primary Care', city: 'Cambridge, MA', leadNp: 'Claire Donovan, MSN, NP-C', focus: 'Preventive & behavioral integration' },
      { name: 'Merrimack Valley Family NP', city: 'Lowell, MA', leadNp: 'Andre Silva, DNP, FNP-BC', focus: 'Multilingual primary care' },
    ],
  },
  {
    code: 'MD',
    name: 'Maryland',
    region: 'Northeast',
    clinicCount: 5,
    patientsApprox: '6,100',
    clinics: [
      { name: 'Chesapeake Family Practice', city: 'Columbia, MD', leadNp: 'Simone Carter, DNP, CRNP', focus: 'Hypertension & preventive care' },
    ],
  },
  {
    code: 'ME',
    name: 'Maine',
    region: 'Northeast',
    clinicCount: 4,
    patientsApprox: '4,200',
    clinics: [
      { name: 'Casco Bay Primary Health', city: 'Portland, ME', leadNp: 'Megan O’Connor, FNP-C', focus: 'Rural continuity & wellness' },
    ],
  },
  {
    code: 'MI',
    name: 'Michigan',
    region: 'Midwest',
    clinicCount: 6,
    patientsApprox: '6,900',
    clinics: [
      { name: 'Great Lakes Family NP Clinic', city: 'Ann Arbor, MI', leadNp: 'Kendra Wallace, MSN, NP-C', focus: 'Preventive & chronic care' },
    ],
  },
  {
    code: 'MN',
    name: 'Minnesota',
    region: 'Midwest',
    clinicCount: 6,
    patientsApprox: '7,000',
    clinics: [
      { name: 'North Star Primary Care', city: 'St. Paul, MN', leadNp: 'Erik Lindqvist, DNP, APRN', focus: 'Whole-family preventive health' },
    ],
  },
  {
    code: 'NC',
    name: 'North Carolina',
    region: 'South',
    clinicCount: 7,
    patientsApprox: '8,100',
    clinics: [
      { name: 'Triangle Nurse-Owned Health', city: 'Durham, NC', leadNp: 'Tasha Robinson, MSN, FNP-C', focus: 'Chronic care & patient re-engagement' },
      { name: 'Blue Ridge Family Clinic', city: 'Asheville, NC', leadNp: 'Caleb Vance, DNP, FNP-BC', focus: 'Primary & urgent visits' },
    ],
  },
  {
    code: 'NH',
    name: 'New Hampshire',
    region: 'Northeast',
    clinicCount: 3,
    patientsApprox: '3,400',
    clinics: [
      { name: 'Granite State Primary Care', city: 'Concord, NH', leadNp: 'Abigail Reed, APRN, FNP-C', focus: 'Annual wellness & chronic care' },
    ],
  },
  {
    code: 'NM',
    name: 'New Mexico',
    region: 'West',
    clinicCount: 4,
    patientsApprox: '4,500',
    clinics: [
      { name: 'Rio Grande Community Clinic', city: 'Albuquerque, NM', leadNp: 'Mateo Chavez, DNP, CNP', focus: 'Underserved family care' },
    ],
  },
  {
    code: 'OH',
    name: 'Ohio',
    region: 'Midwest',
    clinicCount: 10,
    patientsApprox: '11,800',
    clinics: [
      { name: 'City Health Primary Care', city: 'Columbus, OH', leadNp: 'Sarah Jenkins, MSN, APRN, FNP-C', focus: 'Full-scope family & preventive care' },
      { name: 'Cuyahoga Valley NP Practice', city: 'Cleveland, OH', leadNp: 'Grace Hoffman, DNP, APRN', focus: 'Chronic care & lab follow-up' },
    ],
  },
  {
    code: 'OR',
    name: 'Oregon',
    region: 'West',
    clinicCount: 5,
    patientsApprox: '5,900',
    clinics: [
      { name: 'Willamette Primary Practice', city: 'Eugene, OR', leadNp: 'Noah Park, MSN, FNP-C', focus: 'Integrative primary care' },
    ],
  },
  {
    code: 'PA',
    name: 'Pennsylvania',
    region: 'Northeast',
    clinicCount: 7,
    patientsApprox: '8,200',
    clinics: [
      { name: 'Keystone Neighborhood Health', city: 'Pittsburgh, PA', leadNp: 'Brianna Cole, DNP, CRNP', focus: 'Preventive & chronic management' },
    ],
  },
  {
    code: 'TN',
    name: 'Tennessee',
    region: 'South',
    clinicCount: 4,
    patientsApprox: '4,700',
    clinics: [
      { name: 'Cumberland Family Health', city: 'Nashville, TN', leadNp: 'Whitney Brooks, APRN, FNP-C', focus: 'Primary & metabolic care' },
    ],
  },
  {
    code: 'TX',
    name: 'Texas',
    region: 'South',
    clinicCount: 13,
    patientsApprox: '15,400',
    clinics: [
      { name: 'Cornerstone Family Clinic', city: 'Austin, TX', leadNp: 'Marcus Adebayo, FNP-C', focus: 'Diabetes care & AI patient outreach' },
      { name: 'Bayou City Nurse Practice', city: 'Houston, TX', leadNp: 'Vanessa Cruz, DNP, APRN', focus: 'Bilingual family primary care' },
    ],
  },
  {
    code: 'VA',
    name: 'Virginia',
    region: 'South',
    clinicCount: 6,
    patientsApprox: '6,800',
    clinics: [
      { name: 'Commonwealth Primary Care', city: 'Richmond, VA', leadNp: 'Olivia Mercer, MSN, FNP-BC', focus: 'Preventive screenings & wellness' },
    ],
  },
  {
    code: 'WA',
    name: 'Washington',
    region: 'West',
    clinicCount: 7,
    patientsApprox: '8,100',
    clinics: [
      { name: 'Puget Sound Family NP', city: 'Tacoma, WA', leadNp: 'Ethan Sato, DNP, ARNP', focus: 'Community primary & chronic care' },
    ],
  },
];

// Clean 11x8 US State Tile Cartogram layout for crisp, accessible interactive map selection
export interface StateTile {
  code: string;
  col: number;
  row: number;
}

export const US_TILE_MAP: StateTile[] = [
  { code: 'AK', col: 1, row: 1 }, { code: 'ME', col: 11, row: 1 },
  { code: 'VT', col: 10, row: 2 }, { code: 'NH', col: 11, row: 2 },
  { code: 'WA', col: 1, row: 3 }, { code: 'ID', col: 2, row: 3 }, { code: 'MT', col: 3, row: 3 }, { code: 'ND', col: 4, row: 3 }, { code: 'MN', col: 5, row: 3 }, { code: 'WI', col: 6, row: 3 }, { code: 'MI', col: 7, row: 3 }, { code: 'NY', col: 9, row: 3 }, { code: 'MA', col: 10, row: 3 }, { code: 'RI', col: 11, row: 3 },
  { code: 'OR', col: 1, row: 4 }, { code: 'NV', col: 2, row: 4 }, { code: 'WY', col: 3, row: 4 }, { code: 'SD', col: 4, row: 4 }, { code: 'IA', col: 5, row: 4 }, { code: 'IL', col: 6, row: 4 }, { code: 'IN', col: 7, row: 4 }, { code: 'OH', col: 8, row: 4 }, { code: 'PA', col: 9, row: 4 }, { code: 'NJ', col: 10, row: 4 }, { code: 'CT', col: 11, row: 4 },
  { code: 'CA', col: 1, row: 5 }, { code: 'UT', col: 2, row: 5 }, { code: 'CO', col: 3, row: 5 }, { code: 'NE', col: 4, row: 5 }, { code: 'MO', col: 5, row: 5 }, { code: 'KY', col: 6, row: 5 }, { code: 'WV', col: 7, row: 5 }, { code: 'VA', col: 8, row: 5 }, { code: 'MD', col: 9, row: 5 }, { code: 'DE', col: 10, row: 5 },
  { code: 'AZ', col: 2, row: 6 }, { code: 'NM', col: 3, row: 6 }, { code: 'KS', col: 4, row: 6 }, { code: 'AR', col: 5, row: 6 }, { code: 'TN', col: 6, row: 6 }, { code: 'NC', col: 7, row: 6 }, { code: 'SC', col: 8, row: 6 }, { code: 'DC', col: 9, row: 6 },
  { code: 'OK', col: 4, row: 7 }, { code: 'LA', col: 5, row: 7 }, { code: 'MS', col: 6, row: 7 }, { code: 'AL', col: 7, row: 7 }, { code: 'GA', col: 8, row: 7 },
  { code: 'HI', col: 1, row: 8 }, { code: 'TX', col: 4, row: 8 }, { code: 'FL', col: 9, row: 8 },
];

export const ALL_US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming',
];

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  clinic: string;
  location: string;
  outcome: string;
  image: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'sarah-jenkins',
    quote:
      'Before Duet, opening an independent clinic felt buried in payer contracts and billing complexity. Duet handled our credentialing and operational backbone so I could focus 100% on patients—we grew to 1,400 active neighborhood patients in 14 months.',
    name: 'Sarah Jenkins, MSN, APRN, FNP-C',
    role: 'Clinic Owner',
    clinic: 'City Health Primary Care',
    location: 'Columbus, Ohio',
    outcome: '1,400+ active patients in 14 months',
    image: '/src/assets/images/np_portrait_sarah_1794575648343.jpg',
  },
  {
    id: 'marcus-adebayo',
    quote:
      'Patients with diabetes or high blood pressure often drift away when life gets busy. Duet’s AI outreach surfaced 380 overdue follow-ups in our first year and helped our front desk bring those neighbors back before small gaps became hospital visits.',
    name: 'Marcus Adebayo, FNP-C',
    role: 'Practice Founder',
    clinic: 'Cornerstone Family Clinic',
    location: 'Austin, Texas',
    outcome: '380+ high-risk patients re-engaged',
    image: '/src/assets/images/np_portrait_marcus_1794575648384.jpg',
  },
  {
    id: 'elena-ramirez',
    quote:
      'I never wanted to sell my practice to a corporate health system. With Duet, I kept full ownership of my clinic and clinical decisions while gaining a trusted peer network of 130+ nurse practitioner founders across the country.',
    name: 'Elena Ramirez, DNP, APRN',
    role: 'Owner & Lead Practitioner',
    clinic: 'Ramirez Family Health',
    location: 'Tucson, Arizona',
    outcome: '100% nurse-owned independence retained',
    image: '/src/assets/images/np_portrait_elena_1794575649093.jpg',
  },
];
