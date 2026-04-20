const baseUrl = 'https://ukexitadvisors.co.uk';

export function GET() {
  return new Response(`User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml
`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
