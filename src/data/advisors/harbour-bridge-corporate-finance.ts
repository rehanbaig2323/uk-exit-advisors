import { advisorSchema, type Advisor } from '@/lib/schema';

const advisor = {
  slug: 'harbour-bridge-corporate-finance',
  name: 'Harbour Bridge Corporate Finance',
  location: 'London',
  services: ['Corporate Finance / M&A', 'Valuation', 'Succession planning'],
  exitRoutes: ['Trade Sale', 'Partial Exit / Investment', 'MBO'],
  shortDescription: 'Sell-side advice for owner-managed businesses.',
  longDescription: 'Advice on sale prep, buyer targeting and negotiation.',
  keyPeople: [
    { name: 'Sophie Grant', title: 'Managing Director' },
    { name: 'Daniel Price', title: 'Director' },
  ],
  notableWork: [
    'Advised on a strategic trade sale in industrial software.',
  ],
  website: 'https://harbourbridgecf.example.com',
  email: 'hello@harbourbridgecf.example.com',
  phone: '+44 (0)20 7123 8840',
  lastVerified: '2026-03-20',
  advisorTypes: ['Corporate Finance / M&A', 'Valuation'],
  featured: true,
} satisfies Advisor;

export default advisorSchema.parse(advisor);
