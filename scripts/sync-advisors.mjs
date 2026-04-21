#!/usr/bin/env node

const SOURCE_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSo2iJz40c8zr1uW_svXM_zIBvVOXjG6Sv38GLGy-jpt0k9qiecdAc9s9ouObWS8oZHHZmCo0GA99dv/pubhtml?gid=60867661&single=true';
const OUTPUT_URL = new URL('../src/data/advisors.json', import.meta.url);

const REQUIRED_FIELDS = ['slug', 'firm_name', 'website', 'short_description'];
const LIST_FIELDS = new Set(['adviser_types', 'exit_routes', 'sectors', 'regions_served', 'notable_work']);

function clean(value) {
  if (value === undefined || value === null) return '';
  return String(value).replace(/\r\n?/g, '\n').trim();
}

function canonicalKey(value) {
  return clean(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function slugify(value) {
  return clean(value)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = '';
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (quoted) {
      if (char === '"' && next === '"') {
        cell += '"';
        i += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        cell += char;
      }
      continue;
    }

    if (char === '"') {
      quoted = true;
      continue;
    }

    if (char === ',') {
      row.push(cell);
      cell = '';
      continue;
    }

    if (char === '\n') {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = '';
      continue;
    }

    if (char !== '\r') {
      cell += char;
    }
  }

  if (cell.length || row.length) {
    row.push(cell);
    rows.push(row);
  }

  return rows;
}

function deriveCsvUrl(url) {
  const parsed = new URL(url);
  if (parsed.pathname.includes('/pubhtml')) {
    parsed.pathname = parsed.pathname.replace('/pubhtml', '/pub');
    parsed.searchParams.set('output', 'csv');
    parsed.searchParams.delete('single');
  }
  if (!parsed.searchParams.get('output')) {
    parsed.searchParams.set('output', 'csv');
  }
  return parsed.toString();
}

function splitList(value) {
  const raw = clean(value);
  if (!raw) return [];
  return raw
    .split(/\s*,\s*/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseKeyPeople(value) {
  return splitList(value).map((entry) => {
    const openParen = entry.indexOf('(');
    const closeParen = entry.lastIndexOf(')');
    if (openParen > 0 && closeParen > openParen) {
      return {
        name: entry.slice(0, openParen).trim(),
        title: entry.slice(openParen + 1, closeParen).trim(),
      };
    }
    const separators = [' | ', ' - ', ' – ', ' — ', ': '];
    for (const separator of separators) {
      const index = entry.indexOf(separator);
      if (index > 0) {
        return {
          name: entry.slice(0, index).trim(),
          title: entry.slice(index + separator.length).trim(),
        };
      }
    }
    return { name: entry, title: '' };
  });
}

function parseNotableWork(value) {
  const raw = clean(value);
  if (!raw) return [];
  if (raw.includes(';')) {
    return raw
      .split(/\s*;\s*/)
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return [raw];
}

function toBoolean(value) {
  const normalized = clean(value).toLowerCase();
  return ['1', 'true', 'yes', 'y', 'featured'].includes(normalized);
}

function normalizeRow(headerMap, row, index, usedSlugs) {
  const get = (field) => clean(row[headerMap[field]]);
  const hqCity = get('hq_city') || get('location');
  const firmName = get('firm_name');
  const explicitSlug = get('slug');
  let slug = explicitSlug || slugify(firmName);
  if (!slug) {
    return null;
  }

  let uniqueSlug = slug;
  let suffix = 2;
  while (usedSlugs.has(uniqueSlug)) {
    uniqueSlug = `${slug}-${suffix}`;
    suffix += 1;
  }
  usedSlugs.add(uniqueSlug);

  const record = {
    slug: uniqueSlug,
    firm_name: firmName,
    website: get('website'),
    short_description: get('short_description'),
    hq_city: hqCity,
    adviser_types: splitList(get('adviser_types')),
    exit_routes: splitList(get('exit_routes')),
    sectors: splitList(get('sectors')),
    regions_served: splitList(get('regions_served')),
    key_people: parseKeyPeople(get('key_people')),
    notable_work: parseNotableWork(get('notable_work')),
    long_description: get('long_description'),
    email: get('email') || get('primary_contact_email'),
    phone: get('phone') || get('primary_contact_phone'),
    linkedin: get('linkedin'),
    contact_page_url: get('contact_page_url'),
    primary_contact_name: get('primary_contact_name'),
    primary_contact_role: get('primary_contact_role'),
    primary_contact_email: get('primary_contact_email'),
    primary_contact_phone: get('primary_contact_phone'),
    source_type: get('source_type'),
    source_found: get('source_found'),
    listing_status: get('listing_status'),
    featured: toBoolean(get('featured')),
  };

  const logo = get('logo');
  const logoUrl = get('logo_url');
  if (logo || logoUrl) {
    record.logo = logo || logoUrl;
    record.logoUrl = logoUrl || logo;
  }

  const hasRequired = ['slug', 'firm_name', 'website', 'short_description'].every((field) => record[field]);
  if (!hasRequired) {
    usedSlugs.delete(uniqueSlug);
    return null;
  }

  for (const [key, value] of Object.entries(record)) {
    if (LIST_FIELDS.has(key)) {
      record[key] = value.filter(Boolean);
    }
  }

  return record;
}

function rowsToJson(text) {
  const rows = parseCsv(text.trim());
  if (rows.length === 0) {
    return { normalized: [], skipped: 0 };
  }

  const headers = rows[0].map(canonicalKey);
  const headerMap = {};
  headers.forEach((header, index) => {
    if (header) headerMap[header] = index;
  });

  const normalized = [];
  let skipped = 0;
  const usedSlugs = new Set();
  for (let i = 1; i < rows.length; i += 1) {
    const row = rows[i];
    if (row.every((cell) => !clean(cell))) {
      continue;
    }
    const item = normalizeRow(headerMap, row, i + 1, usedSlugs);
    if (!item) {
      skipped += 1;
      continue;
    }
    normalized.push(item);
  }

  return { normalized, skipped };
}

async function fetchCsv() {
  const candidates = [SOURCE_URL, deriveCsvUrl(SOURCE_URL)];
  let lastError = null;

  for (const url of candidates) {
    try {
      const response = await fetch(url, {
        headers: {
          accept: 'text/csv,text/plain;q=0.9,*/*;q=0.8',
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }
      const text = await response.text();
      if (text.includes('<html') || text.includes('<!DOCTYPE html')) {
        throw new Error('received HTML instead of CSV');
      }
      return { text, url };
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error('unable to fetch CSV');
}

async function main() {
  console.log('Fetching advisor source data...');
  const { text, url } = await fetchCsv();
  const { normalized, skipped } = rowsToJson(text);

  const { writeFile, mkdir } = await import('node:fs/promises');
  await mkdir(new URL('.', OUTPUT_URL), { recursive: true });
  await writeFile(OUTPUT_URL, `${JSON.stringify(normalized, null, 2)}\n`, 'utf8');

  console.log(`Fetched from ${url}`);
  console.log(`Wrote ${normalized.length} advisor rows to ${OUTPUT_URL.pathname}`);
  console.log(`Skipped ${skipped} incomplete row${skipped === 1 ? '' : 's'}`);
}

main().catch((error) => {
  console.error('Advisor sync failed');
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
