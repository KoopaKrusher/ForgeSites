# Braden Site

A small personal website built with Next.js (App Router), TypeScript, Tailwind CSS, ESLint + Prettier, and Vitest.

## How to run

- Prerequisites: Node.js 18+ and npm
- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Open: http://localhost:3000

Build and run in production:
- `npm run build`
- `npm start`

Checks:
- Lint: `npm run lint`
- Tests: `npm test`

## How to edit content

- Home: `app/page.tsx` (headline and CTA)
- About: `app/about/page.tsx` (short bio text)
- Projects: `data/projects.json` (add, remove, or edit project entries)
- Contact: `app/contact/page.tsx` (client-side validation rules and fields)
- Navbar: `components/Navbar.tsx` (links and labels)

## Notes

- Tailwind is configured via `tailwind.config.ts` and loaded in `app/globals.css`.
- The responsive navbar highlights the active route using `usePathname`.
- The provided Vitest test checks the navbar renders all links.

## DEPLOYMENT

- Platform: Vercel (Next.js App Router)
- Build command: `npm run build`
- Start command: `npm start`

Steps
- Push this repo to GitHub (or your VCS of choice).
- In Vercel, Import Project, select this repo.
- Environment Variables (optional):
  - `DATABASE_URL`: Required only if you want to persist Request form submissions via Prisma. If omitted in production, the Request form will show a success toast and redirect to `/contact` with the note “We’ll email you shortly” (no DB write).
  - `ADMIN_PASSWORD`: If you use any admin-only routes later, set a strong value.
- Click Deploy. Vercel picks up `vercel.json` for security headers and clean URLs.

Database migrations (production)
- If you set `DATABASE_URL` to a hosted database, run `npm run db:migrate` to apply Prisma migrations during or after deployment.

Images
- `next.config.js` sets `images.unoptimized = true` to avoid remote domain errors. If you later need remote images with `next/image`, add specific `remotePatterns` or `domains` to `images` and remove `unoptimized`.
