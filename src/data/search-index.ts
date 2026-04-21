import { advisorsData } from '@/data/advisors';

export const searchIndex = advisorsData.map((advisor) => ({
  slug: advisor.slug,
  name: advisor.name,
  location: advisor.location,
  terms: [advisor.name, advisor.location, ...(advisor.sectors || []), ...advisor.services, ...advisor.exitRoutes, ...advisor.advisorTypes].join(' ').toLowerCase(),
}));
