import { advisorSchema, type Advisor } from '@/lib/schema';

// Copy this file to create a new advisor entry.
// Edit the fields below and keep the same shape so the site stays stable.
//
// Where to edit:
// - firm name: `name`
// - slug: `slug`
// - website: `website`
// - logo: `logo` or `logoUrl` (optional)
// - city: `location`
// - adviser types: `advisorTypes`
// - exit routes: `exitRoutes`
// - short description: `shortDescription`
// - long description: `longDescription`
// - key people: `keyPeople`
// - contact info: `website`, `email`, `phone`
// - evidence / notable work: `notableWork`
// - last verified: `lastVerified`

const advisor = {
  slug: 'replace-with-firm-slug',
  name: 'Firm Name',
  location: 'City',
  services: ['Corporate Finance / M&A'],
  exitRoutes: ['Trade Sale'],
  shortDescription: 'Short summary shown in cards and listings.',
  longDescription:
    'Longer profile copy for the firm detail page. Explain what the firm does, who it helps and how it approaches exit work.',
  keyPeople: [
    { name: 'Person Name', title: 'Job Title' },
  ],
  notableWork: [
    'A short evidence point, case study or notable transaction.',
  ],
  website: 'https://example.com',
  email: 'hello@example.com',
  phone: '+44 (0)20 0000 0000',
  lastVerified: '2026-01-01',
  advisorTypes: ['Corporate Finance / M&A'],
  featured: false,
} satisfies Advisor;

export default advisorSchema.parse(advisor);
