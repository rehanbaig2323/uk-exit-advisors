import { advisorRecords } from '@/data/advisors';

const width = 1200;
const height = 630;

function escapeXml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

export function getStaticPaths() {
  return advisorRecords.map((advisor) => ({ params: { slug: advisor.slug } }));
}

export function GET({ params }: { params: { slug: string } }) {
  const advisor = advisorRecords.find((item) => item.slug === params.slug);
  if (!advisor) {
    return new Response('Not found', { status: 404 });
  }

  const title = escapeXml(advisor.firm_name);
  const city = escapeXml(advisor.hq_city || '');
  const routes = escapeXml((advisor.exit_routes || []).join(' · '));

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="#F8F5EF"/>
  <rect x="48" y="48" width="1104" height="534" rx="36" fill="#FFFDF8" stroke="#D8CDB8"/>
  <text x="88" y="118" fill="#8F6B2E" font-family="Arial, sans-serif" font-size="24" letter-spacing="3">UK EXIT ADVISORS</text>
  <text x="88" y="238" fill="#203A34" font-family="Arial, sans-serif" font-size="58" font-weight="700">${title}</text>
  <text x="88" y="308" fill="#5E6B63" font-family="Arial, sans-serif" font-size="30">${city}</text>
  <text x="88" y="372" fill="#203A34" font-family="Arial, sans-serif" font-size="28">${routes}</text>
  <text x="88" y="500" fill="#5E6B63" font-family="Arial, sans-serif" font-size="22">Independent directory of UK business-exit advisors</text>
</svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
