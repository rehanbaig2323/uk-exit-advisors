import { advisorsData } from '@/data/advisors';
import { routes } from '@/data/routes';
import { services } from '@/data/services';
import { getSupportedSectorPages, getSupportedLocationPages, getRouteLocationPages, getServiceLocationPages } from '@/data/seo';

const baseUrl = 'https://ukexitadvisors.co.uk';

export function GET() {
  const staticPaths = ['/', '/advisors/', '/for-advisors/', '/route-finder/', '/about/', '/contact/', '/methodology/', '/routes/', '/services/', '/sectors/', '/locations/'];
  const advisorPaths = advisorsData.map((advisor) => `/advisors/${advisor.slug}/`);
  const routePaths = routes.map((route) => `/routes/${route.slug}/`);
  const servicePaths = services.map((service) => `/services/${service.slug}/`);
  const sectorPaths = getSupportedSectorPages().map((page) => `/sectors/${page.slug}/`);
  const locationPaths = getSupportedLocationPages().map((page) => `/locations/${page.slug}/`);
  const comboPaths = [...getRouteLocationPages(), ...getServiceLocationPages()].map((page) => `/advisors/${page.slug}/`);

  const urls = [...staticPaths, ...advisorPaths, ...routePaths, ...servicePaths, ...sectorPaths, ...locationPaths, ...comboPaths]
    .map((path) => `  <url><loc>${baseUrl}${path}</loc></url>`)
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
