import rawAdvisors from './advisors.json';
import type { Advisor } from '@/lib/schema';

type RawAdvisor = {
  slug: string;
  firm_name: string;
  website: string;
  short_description: string;
  hq_city?: string;
  adviser_types?: string[];
  exit_routes?: string[];
  sectors?: string[];
  regions_served?: string[];
  key_people?: Array<{ name: string; title?: string }>;
  notable_work?: string[];
  long_description?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  contact_page_url?: string;
  primary_contact_name?: string;
  primary_contact_role?: string;
  primary_contact_email?: string;
  primary_contact_phone?: string;
  source_type?: string;
  source_found?: string;
  listing_status?: string;
  featured?: boolean;
};

function toAdvisor(raw: RawAdvisor, index: number): Advisor {
  return {
    slug: raw.slug,
    name: raw.firm_name,
    location: raw.hq_city || '',
    services: raw.adviser_types || [],
    exitRoutes: raw.exit_routes || [],
    shortDescription: raw.short_description,
    longDescription: raw.long_description || raw.short_description,
    keyPeople: (raw.key_people || []).map((person) => ({
      name: person.name,
      title: person.title || '',
    })),
    notableWork: raw.notable_work || [],
    website: raw.website,
    email: raw.email || '',
    phone: raw.phone || '',
    lastVerified: raw.source_found || raw.listing_status || '',
    advisorTypes: raw.adviser_types || [],
    featured: raw.featured ?? index < 3,
  };
}

export const advisorsData = (rawAdvisors as RawAdvisor[]).map(toAdvisor);

export const advisorFilters = {
  services: [...new Set(advisorsData.flatMap((advisor) => advisor.services))].sort(),
  exitRoutes: [...new Set(advisorsData.flatMap((advisor) => advisor.exitRoutes))].sort(),
  advisorTypes: [...new Set(advisorsData.flatMap((advisor) => advisor.advisorTypes))].sort(),
  locations: [...new Set(advisorsData.map((advisor) => advisor.location).filter(Boolean))].sort(),
};

export function getAdvisorBySlug(slug: string) {
  return advisorsData.find((advisor) => advisor.slug === slug);
}
