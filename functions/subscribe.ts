export async function onRequestPost(context: { request: Request }) {
  // TODO: set RESEND_API_KEY in the Cloudflare Pages dashboard before relying on live email delivery.
  const contentType = context.request.headers.get('content-type') || '';
  const payload = contentType.includes('application/json')
    ? await context.request.json().catch(() => ({}))
    : Object.fromEntries(await context.request.formData().catch(() => new FormData()));
  console.log('subscribe payload', payload);

  const apiKey = (context as { env?: { RESEND_API_KEY?: string } }).env?.RESEND_API_KEY;
  if (apiKey && payload?.email) {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'UK Exit Advisors <onboarding@resend.dev>',
        to: 'info@ukexitadvisors.co.uk',
        subject: `UK Exit Advisors subscription: ${payload.recommended_route || 'route finder'}`,
        text: `Email: ${payload.email}\nRecommended route: ${payload.recommended_route || ''}\nSource: ${payload.source || ''}`,
      }),
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
