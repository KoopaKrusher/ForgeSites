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
