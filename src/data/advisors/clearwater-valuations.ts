import { advisorSchema, type Advisor } from '@/lib/schema';

const advisor = {
  slug: 'clearwater-valuations',
  name: 'Clearwater Valuations',
  location: 'Leeds',
  services: ['Valuation', 'Independent expert reports', 'Board support'],
  exitRoutes: ['Partial Exit / Investment', 'MBO', 'Trade Sale'],
  shortDescription: 'Independent valuations before sale.',
  longDescription: 'Valuations, fairness opinions and board support.',
  keyPeople: [
    { name: 'Joanna Ellis', title: 'Lead Valuer' },
    { name: 'Marcus Bell', title: 'Director' },
  ],
  notableWork: [
    'Prepared a fairness opinion for a minority investment.',
  ],
  website: 'https://clearwatervaluations.example.com',
  email: 'info@clearwatervaluations.example.com',
  phone: '+44 (0)113 408 7721',
  lastVerified: '2026-03-18',
  advisorTypes: ['Valuation'],
  featured: true,
} satisfies Advisor;

export default advisorSchema.parse(advisor);
