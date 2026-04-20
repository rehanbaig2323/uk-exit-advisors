# UK Exit Advisors

Astro 5 + TypeScript + Tailwind static directory for UK exit advisers.

## Install

```bash
npm install
```

## Develop

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Advisor sync

The build runs `scripts/sync-advisors.mjs` first, which fetches the published Google Sheets CSV, normalizes the rows, and writes `src/data/advisors.json`.

Run it directly if you want to refresh the JSON without building:

```bash
npm run sync:advisors
```

Then build normally:

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Notes

- Static site only.
- No database or external services.
- All advisor content lives in `src/data/advisors/` and can be edited manually.
- Cloudflare Pages compatible out of the box.

## Editing advisor entries

Replace the six demo firms one by one in `src/data/advisors/`.

- `src/data/advisors/template.ts` is the easiest starting point for a new firm.
- Each firm has its own file so you can swap entries without editing a large array.
- `src/data/advisors/index.ts` controls the order of firms shown on the site.

Edit these fields in each firm file:

- `name` for firm name
- `slug` for the URL path
- `website` for the firm site
- `location` for the city
- `advisorTypes` for the adviser categories
- `exitRoutes` for the exit routes covered
- `shortDescription` for card and listing text
- `longDescription` for the detailed profile
- `keyPeople` for named contacts
- `website`, `email`, and `phone` for contact info
- `notableWork` for evidence, case studies, or notable work
- `lastVerified` for the verification date

Replacement flow:

1. Copy `template.ts` to a new file named after the firm slug.
2. Fill in the fields above.
3. Add the new file to `src/data/advisors/index.ts`.
4. Remove the demo file you are replacing, if needed.
