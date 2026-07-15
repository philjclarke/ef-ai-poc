# Energising Futures — AI Resource Prototype

Prototype of an AI-powered enrichment to [Energising Futures](https://energisingfutures.co.uk) resource pages: a teacher-facing generator that produces bespoke **Science Capital Teaching Resource** content (local news story, local role model, two local jobs, five conversation starters) for a given lesson.

This is a stepping stone towards the EdCo Apollo (Next.js + Umbraco) rebuild — components and types are structured to port into that stack.

## Running locally

```bash
npm install
npm run dev
```

## Routes

- `/` — landing page linking to the three POC resources
- `/resource/[slug]` — the resource page (`autumn-science-hunt`, `planets-of-the-solar-system-poster`, `periodic-table-posters`)
- `/api/generate` — **mock** EdCo/Spirit endpoint (POST)

## Simulated auth

There is no real authentication. `?state=logged-in` simulates a signed-in teacher; the header button and the floating "Prototype" badge toggle it. Logged out shows the teaser + sign-in CTA; logged in shows the generator form.

## The mock endpoint

`app/api/generate/route.ts` accepts a `GenerateRequest` (see `lib/types.ts`), waits ~2.5s to simulate generation, and returns a `TeachingResource` built from hand-authored payloads in `lib/mock-data.ts` (one per resource, written in the style of the reference PDF samples) with the teacher's topic, location, interests and occupations interpolated where coherent.

When the real EdCo endpoint lands, only the route handler / mock data change — the `TeachingResource` type is the contract shared with all consuming components. The real backend receives a `webAccountId`, which Spirit enriches server-side with school, location, deprivation stats and Ofsted data; the UI reflects this by pre-filling location from a mock school profile (`lib/resources.ts`).

**All generated content is illustrative** — news stories and job listings are plausible but not verified; do not treat links as live sources.

## Out of scope (deferred)

Real auth (EdCo/Apollo), content persistence/sharing, payments, analytics, SEO, full design system.
