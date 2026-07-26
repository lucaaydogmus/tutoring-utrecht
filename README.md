# Utrecht Bijles

Website for Luca Aydogmus's tutoring practice in Utrecht. Next.js (App Router) + Tailwind CSS v4, bilingual (NL/EN).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Things to finish before going live

1. **Replace the placeholder portrait.** The hero and "Over Luca" sections currently show an abstract placeholder (see [src/components/PortraitFrame.tsx](src/components/PortraitFrame.tsx)). Drop the real photo into `public/` (e.g. `luca-portrait.webp`) and swap in a `next/image` as described in the comment at the top of that file.

2. **Activate the contact form.** The form at `/#contact` posts to `src/app/api/contact/route.ts`, which currently just logs submissions to the server console because no email provider is configured yet — visitors will see a "not yet configured" error until you set this up. To activate it:
   - Create a free account at [resend.com](https://resend.com) and get an API key.
   - Set these environment variables (in `.env.local` locally, and in your hosting provider's dashboard for production):
     ```
     RESEND_API_KEY=your_key_here
     CONTACT_TO_EMAIL=lucaaydogmus@gmail.com
     CONTACT_FROM_EMAIL=onboarding@resend.dev
     ```
   - `CONTACT_FROM_EMAIL` can stay as Resend's shared test address (`onboarding@resend.dev`) to start; for production, verify your own domain with Resend and use an address on it instead.
   - Until this is configured, the WhatsApp button/link works immediately as a fallback contact method — no setup needed.

3. **Set the real production URL.** Update `siteUrl` in [src/lib/site-config.ts](src/lib/site-config.ts) once the site has a domain — it's used for canonical URLs and Open Graph tags.

4. **Legal pages.** `/privacybeleid` and `/algemene-voorwaarden` are draft texts (clearly marked as such on the pages) and must be reviewed by a legal professional before publishing.

5. **Business details** (name, phone, email, WhatsApp number, pricing) all live in [src/lib/site-config.ts](src/lib/site-config.ts) — edit them there in one place.

## Deploying

The site is a standard Next.js app and deploys directly to [Vercel](https://vercel.com/new) (recommended, free tier) or any Node hosting that supports Next.js. Remember to set the environment variables from step 2 above in the hosting provider's dashboard.
