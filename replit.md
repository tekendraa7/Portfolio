# CyberShield Portfolio

A cybersecurity portfolio web app for Tekendra Bhandari — featuring an AI-powered Q&A chatbot, projects showcase, curated research resources, and a structured learning roadmap.

## Run & Operate

- `pnpm --filter @workspace/cybershield run dev` — run the frontend (port 19380, preview at `/`)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080, preview at `/api`)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- Required env: `GOOGLE_GENAI_API_KEY` — Google AI (Gemini) API key for the chatbot

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: Vite + React, Tailwind v4, shadcn/ui, wouter routing, next-themes
- API: Express 5 (artifact: `api-server`)
- AI: Google Generative AI SDK (`@google/generative-ai`) → Gemini 2.0 Flash
- Icons: lucide-react, react-icons (FaXxx)
- Form handling: react-hook-form + zod + @hookform/resolvers
- Build: esbuild (API server CJS bundle)

## Where things live

- `artifacts/cybershield/src/pages/` — page components (Home, Portfolio, QA, Blogs, Roadmap)
- `artifacts/cybershield/src/components/` — layout, portfolio, qa, chat, blogs, ui
- `artifacts/cybershield/src/data/` — portfolioData.ts, blogsData.ts (all static content)
- `artifacts/api-server/src/routes/ai.ts` — POST /api/ai/ask and POST /api/ai/chat
- `artifacts/cybershield/src/index.css` — Tailwind v4 theme tokens (CSS variables for light/dark)

## Architecture decisions

- No Next.js server actions — all AI calls go through Express `/api/ai/*` routes using the Google Generative AI SDK directly
- Static portfolio data lives in `src/data/` — no DB needed for the portfolio content
- Contact form simulates submission (logs to console) — no email service wired up
- Floating chat button (bottom-right) opens a dialog with a full chat window; Q&A page has a dedicated chat interface with matrix background
- Dark mode default with light/dark/system toggle via next-themes

## Product

- **Home** — hero section with matrix rain background, name/title/bio, navigation cards
- **Portfolio** — profile photo, skills with progress bars, project cards, contact form + links
- **Q&A** — AI chatbot (Gemini 2.0 Flash) for cybersecurity/Linux/networking questions; also floating chat button on all pages
- **Research** — curated cybersecurity blogs, OWASP Top 10, research hubs, Discord servers, Reddit feeds
- **Roadmap** — 6-phase learning roadmap with free resources per phase

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Tailwind v4 uses `@tailwindcss/vite` plugin (not postcss config) — do not add postcss.config.mjs
- `react-icons` (FaXxx) are used only in Roadmap.tsx for the resource icons
- The API server runs at port 8080 internally; the Vite proxy forwards `/api/*` calls from the frontend
- Free-tier Gemini API keys may hit rate limits (429) — this is expected on first-run

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
