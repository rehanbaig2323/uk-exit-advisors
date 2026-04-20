import { advisorSchema, type Advisor } from '@/lib/schema';

const advisor = {
  slug: 'northgate-legal-partners',
  name: 'Northgate Legal Partners',
  location: 'Manchester',
  services: ['Legal', 'Employment law', 'Shareholder agreements'],
  exitRoutes: ['EOT', 'MBO', 'Succession'],
  shortDescription: 'Legal support for ownership transitions.',
  longDescription: 'Legal steps for transition, governance and completion.',
  keyPeople: [
    { name: 'Priya Menon', title: 'Partner' },
    { name: 'Edward Holt', title: 'Senior Associate' },
  ],
  notableWork: [
    'Completed legal work for an employee ownership transition.',
  ],
  website: 'https://northgatelegal.example.com',
  email: 'enquiries@northgatelegal.example.com',
  phone: '+44 (0)161 555 2190',
  lastVerified: '2026-03-12',
  advisorTypes: ['Legal', 'Trustee / Employee Ownership'],
  featured: true,
} satisfies Advisor;

export default advisorSchema.parse(advisor);
