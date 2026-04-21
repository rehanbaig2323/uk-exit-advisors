type AdvisorLike = {
  name?: string;
  firm_name?: string;
  website?: string;
  logo?: string;
  logoUrl?: string;
};

function cleanUrl(value?: string) {
  const url = String(value || '').trim();
  return url || '';
}

function getWebsiteHost(website?: string) {
  const value = cleanUrl(website);
  if (!value) return '';

  try {
    return new URL(value).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

export function getAdvisorDisplayName(advisor: AdvisorLike) {
  return advisor.name || advisor.firm_name || '';
}

export function getAdvisorLogoUrl(advisor: AdvisorLike) {
  return cleanUrl(advisor.logoUrl || advisor.logo);
}

export function getAdvisorFaviconUrl(advisor: AdvisorLike) {
  const host = getWebsiteHost(advisor.website);
  if (!host) return '';
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=128`;
}

export function getAdvisorInitials(advisor: AdvisorLike) {
  const name = getAdvisorDisplayName(advisor)
    .replace(/&/g, ' ')
    .replace(/[^A-Za-z0-9 ]+/g, ' ')
    .trim();

  if (!name) return 'AD';

  const words = name.split(/\s+/).filter(Boolean);
  if (!words.length) return 'AD';

  const initials = words.slice(0, 3).map((word) => word.charAt(0)).join('');
  if (initials.length >= 2) return initials.toUpperCase();

  return name.slice(0, 2).toUpperCase();
}
