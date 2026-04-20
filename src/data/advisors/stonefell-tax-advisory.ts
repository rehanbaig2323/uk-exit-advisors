import { advisorSchema, type Advisor } from '@/lib/schema';

const advisor = {
  slug: 'stonefell-tax-advisory',
  name: 'Stonefell Tax Advisory',
  location: 'Birmingham',
  services: ['Tax', 'Structuring', 'Business relief planning'],
  exitRoutes: ['EOT', 'Succession', 'Trade Sale'],
  shortDescription: 'Tax-led advice on exit structures.',
  longDescription: 'Pre-exit planning, structure and post-deal tax.',
  keyPeople: [
    { name: 'Helen Ward', title: 'Director' },
    { name: 'Amir Qureshi', title: 'Tax Partner' },
  ],
  notableWork: [
    'Designed the tax structure for an employee ownership deal.',
  ],
  website: 'https://stonefelltax.example.com',
  email: 'team@stonefelltax.example.com',
  phone: '+44 (0)121 447 9033',
  lastVerified: '2026-03-08',
  advisorTypes: ['Tax'],
  featured: false,
} satisfies Advisor;

export default advisorSchema.parse(advisor);
