import { advisorSchema, type Advisor } from '@/lib/schema';

const advisor = {
  slug: 'cedarhouse-eot-trustees',
  name: 'Cedarhouse EOT Trustees',
  location: 'Bristol',
  services: ['Trustee / Employee Ownership', 'EOT advisory', 'Governance'],
  exitRoutes: ['EOT', 'Succession', 'MBO'],
  shortDescription: 'Employee ownership specialists.',
  longDescription: 'EOT setup, governance and ongoing stewardship.',
  keyPeople: [
    { name: 'Martin Shaw', title: 'EOT Adviser' },
    { name: 'Leah Turner', title: 'Trustee Services Lead' },
  ],
  notableWork: [
    'Guided a professional services firm through an EOT transition.',
  ],
  website: 'https://cedarhouseeot.example.com',
  email: 'hello@cedarhouseeot.example.com',
  phone: '+44 (0)117 229 4401',
  lastVerified: '2026-03-22',
  advisorTypes: ['Trustee / Employee Ownership', 'Legal'],
  featured: true,
} satisfies Advisor;

export default advisorSchema.parse(advisor);
