# Land Quest Home

Production-oriented New York real-estate starter built with Next.js 15 App Router, TypeScript, Tailwind CSS, Framer Motion, Sanity Studio, Google Maps and Formspree.

## 1. Setup

Requirements: Node 20.19+ and a Sanity account.

```bash
npm install
cp .env.example .env.local
# fill in .env.local
npm run dev
```

Open http://localhost:3000 and Sanity Studio at http://localhost:3000/studio.

Create a Sanity project and put its project ID/dataset in `.env.local`. Then deploy the Studio or keep it embedded at `/studio`.

## 2. Environment variables

- `NEXT_PUBLIC_SANITY_PROJECT_ID` — Sanity project ID.
- `NEXT_PUBLIC_SANITY_DATASET` — normally `production`.
- `NEXT_PUBLIC_SANITY_API_VERSION` — API date string.
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` — browser key restricted to your Vercel domain(s) and Maps JavaScript API.
- `NEXT_PUBLIC_FORMSPREE_FORM_ID` — Formspree form hash ID.
- `NEXT_PUBLIC_SITE_URL` — canonical site URL.

## 3. Sanity workflow

1. Open `/studio` and sign in.
2. Create one `Site Settings` document and enter logo, contact details, social URLs, mission and vision.
3. Create `Property Listing` documents. Use the Basics group first, then Details, Photos & Map, and Agent.
4. Add at least one gallery image and a slug. Tick `Feature on homepage` for homepage properties.
5. Publish. The website re-fetches Sanity content every 60 seconds.
6. Create `Client Review` documents. Set rating, review text and `Show on homepage`.
7. Optional: add Team Members and Page Content.

## 4. Production deployment

- Push this repository to GitHub.
- Import into Vercel.
- Add the environment variables in Vercel Project Settings.
- Add your production frontend origin to Sanity CORS settings.
- Restrict the Google Maps browser key by HTTP referrer and API.
- Configure Formspree's email destination and spam protections.
- Use HTTPS and a custom domain.

## 5. Content freshness

The starter uses Next.js App Router caching with a 60-second Sanity revalidation tag. For larger production deployments, add a signed Sanity webhook to a Next.js revalidation route for near-instant publishing. Sanity's current docs recommend `defineLive` for newer Next.js integrations; this project intentionally uses a Next.js 15-compatible pattern because the requested stack is Next.js 15.

## 6. Accessibility / UX checklist

- Semantic headings and labels.
- Keyboard-friendly navigation and forms.
- Visible focus styles.
- Alt text field for property gallery images.
- Responsive cards and controls.
- High contrast navy/white/gold palette.
- Images served through Next Image + Sanity CDN transformations.

## 7. Important real-estate production notes

This site is a CMS-driven marketing/listing interface, not an MLS feed. Listings are manually managed in Sanity as requested. Before launch, confirm brokerage licensing, fair-housing language, IDX/MLS rules, listing accuracy, privacy policy, terms, cookie/analytics consent, lead-routing, and accessibility compliance with the appropriate New York professionals.
