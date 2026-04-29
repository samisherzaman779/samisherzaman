# Personal portfolio website — project instructions

Single reference for setup, commands, env vars, SEO, and common changes. Application root: **`personal-portfolio-website/`** (run all npm commands from here unless noted).

---

## Prerequisites

- **Node.js** 20.x LTS (matches typical Next.js 16 deployments).
- **npm** (comes with Node).

---

## Install & local development

```bash
cd personal-portfolio-website
npm install
npm run dev
```

Open **http://localhost:3000**. Hot reload is enabled.

Other scripts:

| Command | Purpose |
|--------|---------|
| `npm run dev` | Development server (Turbopack). |
| `npm run build` | Production build + TypeScript check. |
| `npm run start` | Serve production build locally (after `build`). |
| `npm run lint` | ESLint. |

---

## Environment variables

Copy **`.env.example`** → **`.env.local`** in **`personal-portfolio-website/`** (same folder as `package.json`). Never commit **`.env.local`**.

**Important:** Next.js only reads `.env*` files from the **app folder** (`personal-portfolio-website/`). If `.env.local` lives only in the parent repo folder (above `personal-portfolio-website/`), variables such as **`GROQ_API_KEY` will not load** and **`/api/chat` will fail**. Keep secrets next to `package.json`. After editing env vars, restart **`npm run dev`**.

### Required for production-quality SEO

| Variable | Purpose |
|----------|---------|
| **`NEXT_PUBLIC_SITE_URL`** | Canonical site origin **without trailing slash** (e.g. `https://yoursite.com`). Drives **`metadataBase`**, **`sitemap.xml`**, **`robots.txt`**, JSON-LD URLs. Defaults to `http://localhost:3000` if unset. |

### Optional

| Variable | Purpose |
|----------|---------|
| **`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`** | Google Search Console verification meta content value. |
| **`GROQ_API_KEY`** | Chat assistant (`app/api/chat/route.ts`). Free key from [Groq Console](https://console.groq.com/). |
| **SMTP_*** / **`CONTACT_EMAIL`** | Contact form email delivery (`lib/mail.ts`, `app/api/contact/route.ts`). |

After changing env on **Vercel** (or similar), redeploy so `NEXT_PUBLIC_*` values are baked into the client bundle.

---

## SEO implementation (what exists where)

| Item | Location |
|------|-----------|
| Global metadata (`metadataBase`, title template, OG/Twitter defaults) | `lib/site-metadata.ts`, imported in `app/layout.tsx` |
| Site constants & helpers (`SITE_URL`, `absoluteUrl`) | `lib/site-config.ts` |
| Generated **OG & Twitter** images (1200×630) | `app/opengraph-image.tsx`, `app/twitter-image.tsx`, shared drawing in `lib/create-og-image.tsx` |
| **Sitemap** | `app/sitemap.ts` → **`/sitemap.xml`** |
| **Robots** | `app/robots.ts` → **`/robots.txt`** (allows `/`, disallows `/api/`) |
| **Web app manifest** | `app/manifest.ts` → **`/manifest.webmanifest`** |
| **Sitewide JSON-LD** (Person + WebSite) | `components/seo/SiteJsonLd.tsx` (included in root layout) |
| **Blog article JSON-LD** | `components/seo/BlogPostingJsonLd.tsx` + `app/blog/[slug]/page.tsx` |
| Per-route **titles / descriptions / canonicals** | Segment **`layout.tsx`** files under `app/about`, `app/projects`, `app/skills`, `app/services`, `app/contact`, `app/blog`; **`metadata`** on `app/page.tsx`, `app/privacy/page.tsx`, `app/terms/page.tsx`; **`generateMetadata`** on `app/blog/[slug]/page.tsx` and `app/services/[slug]/page.tsx` |

### Post-deploy checklist

1. Set **`NEXT_PUBLIC_SITE_URL`** to the live URL and redeploy.
2. Submit **`https://YOUR_DOMAIN/sitemap.xml`** in Google Search Console / Bing Webmaster Tools.
3. Optionally add **`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`** after creating a Search Console property.
4. Validate rich results / OG previews using Google’s Rich Results Test or sharing debugger tools.

---

## Content updates (developer reference)

| Content | Edit |
|---------|------|
| Blog posts | `lib/blog-data.ts` |
| Service listings & detail pages | `lib/services-detail.ts` |
| Navbar links | `components/layout/Navbar.tsx` |
| Footer links | `components/layout/Footer.tsx` |
| Resume PDF | `public/resume/resume.pdf`, Hero link in `components/sections/Hero.tsx` |

After adding blog posts or services, **`npm run build`** regenerates static paths (`generateStaticParams`) and **`sitemap.ts`** picks them up automatically.

---

## Deployment notes

- **Vercel**: Connect repo root or monorepo app directory `personal-portfolio-website`; set env vars in Project Settings → Environment Variables.
- **`NEXT_PUBLIC_SITE_URL`**: Must match the deployed hostname (including `https`).
- **`npm run build`** must pass before merging or deploying.

---

## Troubleshooting

| Issue | What to try |
|-------|----------------|
| Wrong canonical / OG URL | Confirm **`NEXT_PUBLIC_SITE_URL`** matches production and redeploy. |
| Contact email fails | Check SMTP vars and provider app-password / SMTP allowed-from rules. |
| Chat bot errors | Set **`GROQ_API_KEY`** or disable UI entry points if unused. |
| Build fails on OG image | Ensure `app/opengraph-image.tsx` builds (Edge runtime); switch to `nodejs` in that file if your host requires it. |

---

## Repository layout (high level)

```
personal-portfolio-website/
  app/                 App Router routes, API routes, sitemap/robots/manifest
  components/          UI, layout, SEO helpers
  lib/                 Utilities, blog data, services data, site config
  public/              Static assets (resume, images)
  .env.example         Env template (copy to .env.local)
```

---

*Last aligned with codebase structure as of April 2026.*
