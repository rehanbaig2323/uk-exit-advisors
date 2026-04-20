import { advisorSchema, type Advisor } from '@/lib/schema';

const advisor = {
  slug: 'oakwell-wealth-planning',
  name: 'Oakwell Wealth Planning',
  location: 'Edinburgh',
  services: ['Wealth Planning', 'Succession planning', 'Family governance'],
  exitRoutes: ['Succession', 'Trade Sale', 'Partial Exit / Investment'],
  shortDescription: 'Wealth planning for founders after exit.',
  longDescription: 'Aligns exit decisions with personal financial planning.',
  keyPeople: [
    { name: 'Fiona McLeod', title: 'Chartered Financial Planner' },
    { name: 'Callum Fraser', title: 'Partner' },
  ],
  notableWork: [
    'Built a post-exit planning framework for a founder sale.',
  ],
  website: 'https://oakwellwealth.example.com',
  email: 'contact@oakwellwealth.example.com',
  phone: '+44 (0)131 555 4817',
  lastVerified: '2026-03-15',
  advisorTypes: ['Wealth Planning'],
  featured: false,
} satisfies Advisor;

export default advisorSchema.parse(advisor);
