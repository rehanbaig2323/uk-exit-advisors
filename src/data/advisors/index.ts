import type { Advisor } from '@/lib/schema';

import harbourBridge from './harbour-bridge-corporate-finance';
import northgateLegal from './northgate-legal-partners';
import stonefellTax from './stonefell-tax-advisory';
import clearwaterValuations from './clearwater-valuations';
import oakwellWealth from './oakwell-wealth-planning';
import cedarhouseEot from './cedarhouse-eot-trustees';

export const advisorsData: Advisor[] = [
  harbourBridge,
  northgateLegal,
  stonefellTax,
  clearwaterValuations,
  oakwellWealth,
  cedarhouseEot,
];

// Keep this list in the order you want firms to appear.
// Replace one file at a time as you swap demo firms for real firms.
export const advisorFilters = {
  services: [...new Set(advisorsData.flatMap((advisor) => advisor.services))].sort(),
  exitRoutes: [...new Set(advisorsData.flatMap((advisor) => advisor.exitRoutes))].sort(),
  advisorTypes: [...new Set(advisorsData.flatMap((advisor) => advisor.advisorTypes))].sort(),
  locations: [...new Set(advisorsData.map((advisor) => advisor.location))].sort(),
};

export function getAdvisorBySlug(slug: string) {
  return advisorsData.find((advisor) => advisor.slug === slug);
}
