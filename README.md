# InspireU

A production-grade base for the InspireU website — a nonprofit run by high schoolers in the Eastside Seattle area dedicated to empowering underprivileged and underrepresented students worldwide.

Built with Next.js (App Router), TypeScript, and Tailwind CSS v3. All copy lives in a single content file and every image slot is a typed placeholder so real photos can be dropped in without touching component code.

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run build        # production build
npm run start        # serve production build
npm run lint         # eslint
npx tsc --noEmit     # type check
```

Runtime: Node 20+. Tested on Node 25.

## Project structure

```
src/
├── app/                       # App Router routes
│   ├── layout.tsx             # Root layout: fonts, Navbar, Footer
│   ├── page.tsx               # Home (/)
│   ├── globals.css            # Tailwind directives + CSS variables (design tokens)
│   ├── our-team/page.tsx
│   ├── charity-work/page.tsx
│   ├── our-committees/page.tsx
│   ├── committee-work/page.tsx
│   ├── contact-us/page.tsx
│   └── give/page.tsx
├── components/                # Reusable UI
│   ├── Navbar.tsx             # Sticky nav, transparent over hero, mobile hamburger
│   ├── Footer.tsx
│   ├── Hero.tsx               # Full-bleed image hero with title/subtitle
│   ├── SectionHeader.tsx
│   ├── PersonCard.tsx         # Square image + name + role + school
│   ├── EventCard.tsx          # Two layouts: split (image left, text right) + gallery
│   ├── MissionBlock.tsx       # Image-left / text-right block used on Home
│   ├── CTAButton.tsx          # White pill (primary), Gold pill, Ghost
│   ├── Container.tsx          # Max-width wrapper with horizontal padding
│   ├── PlaceholderImage.tsx   # Inline SVG placeholder (wings glyph + label)
│   ├── InspireULogo.tsx       # Wings glyph + INSPIREU wordmark (inline SVG)
│   ├── SocialIcons.tsx        # Inline brand SVGs (TikTok, LinkedIn, Instagram)
│   └── ContactForm.tsx        # Client form with toast on submit
├── lib/
│   ├── content.ts             # ALL site copy (board, advisors, events, committees)
│   └── hooks/useFadeIn.ts     # IntersectionObserver-backed scroll fade
└── types/
    └── content.ts             # TS interfaces for Person, Advisor, Event, Committee
tailwind.config.ts             # Color tokens, font family vars, animations
postcss.config.mjs             # Tailwind v3 + autoprefixer
next.config.ts                 # Turbopack root pinned to project dir
```

### Design system

CSS variables live in `src/app/globals.css`; Tailwind aliases them in `tailwind.config.ts`. Edit either to change tokens.

| Token             | Value                          | Tailwind alias              |
| ----------------- | ------------------------------ | --------------------------- |
| `--bg-base`       | `#0d0610`                      | `bg-base`                   |
| `--bg-elevated`   | `#170a1d`                      | `bg-elevated`               |
| `--bg-deep`       | `#080306`                      | `bg-deep`                   |
| `--gold`          | `#c9a961`                      | `text-gold`, `bg-gold`      |
| `--gold-bright`   | `#e8b86f`                      | `text-gold-bright`          |
| `--gold-soft`     | `#d4af37`                      | `text-gold-soft`            |
| `--text-primary`  | `#ffffff`                      | `text-primary`              |
| `--text-secondary`| `rgba(255,255,255,0.72)`       | `text-secondary`            |
| `--text-muted`    | `rgba(255,255,255,0.48)`       | `text-muted`                |
| `--border-subtle` | `rgba(201,169,97,0.18)`        | `border-gold-subtle`        |

Fonts are loaded via `next/font/google` in `src/app/layout.tsx`:

- Display: **Montserrat** (500–900, italic + roman) → CSS var `--font-display`, Tailwind class `font-display`
- Body: **Inter** → CSS var `--font-body`, Tailwind class `font-sans`

## How to edit content

All site copy lives in `src/lib/content.ts`. Components read from typed constants exported there. Hot reload picks up changes immediately.

Examples:

- Rename a board member: edit `BOARD_MEMBERS[i].name`.
- Add a new charity event: append an object to `CHARITY_EVENTS` (TS will enforce shape).
- Change the mission body: edit `MISSION.body`.
- Update contact email/phone: edit `SITE` at the top of `content.ts` — propagates everywhere.

Types live in `src/types/content.ts`. They are imported by `content.ts` and exported for component props.

## How to swap placeholders for real images

Every image slot is a `<PlaceholderImage label="..." aspect="..." />` rendering a dark card with the InspireU wings glyph and a label describing what belongs there. To replace with a real photo:

1. **Drop the file in `public/`** (e.g. `public/board/arham.jpg`). Keep aspect ratios consistent — square for people, 16:9 or 4:3 for events.

2. **Open the consumer** (usually a content file, not a component). For example, the board grid in `src/app/our-team/page.tsx` reads from `BOARD_MEMBERS` in `src/lib/content.ts`.

3. **Replace the placeholder render with `next/image`.** The cleanest pattern is to add an optional `image: string` field to the content type, then branch in the consuming card. For a one-off, you can also edit `PersonCard.tsx` directly:

   ```tsx
   // src/components/PersonCard.tsx — example swap for real images
   import Image from "next/image";
   // Replace the inner PlaceholderImage with:
   <Image
     src={`/board/${slug}.jpg`}
     alt={name ?? role}
     width={400}
     height={400}
     className="w-full h-full object-cover"
   />
   ```

4. **For event galleries**, the labels in `CHARITY_EVENTS[].images[].label` describe what each slot is for ("Photo: Dandiya event group photo", "Screenshot: PayPal donation confirmation..."). Match each label to a real asset, then update `EventCard.tsx` to render `<Image>` instead of `<PlaceholderImage>`.

5. **For the Hero background image**, edit `src/components/Hero.tsx` — replace the inline wings background with a full-bleed `<Image fill src="..." />`. The dark gradient overlay should remain to keep text legible.

The placeholder component (`src/components/PlaceholderImage.tsx`) can stay in the codebase — it's useful for future sections that don't yet have art.

## Routing

| Route                | Purpose                                                |
| -------------------- | ------------------------------------------------------ |
| `/`                  | Hero + Mission + About Us                              |
| `/our-team`          | Board of Directors + Advisors                          |
| `/charity-work`      | Donation events / partnerships                         |
| `/our-committees`    | Six high school committees                             |
| `/committee-work`    | Why start a committee + how-to + Get Involved CTA      |
| `/contact-us`        | Contact details + form (form `console.log`s for now)   |
| `/give`              | Donation placeholder                                   |

The Navbar's active route is highlighted in gold with a thin underline on desktop.

## Contact form

`src/components/ContactForm.tsx` is currently a stub: it `console.log`s submissions and shows a toast. To wire up a real backend:

1. Replace the body of `handleSubmit` with a `fetch` to your endpoint (Resend, Formspree, a Next.js Route Handler, etc.).
2. Add proper error handling and loading state.
3. Consider adding HCaptcha / Turnstile if exposed publicly.

## Deploy to Vercel

1. Push the repo to GitHub.
2. Import in Vercel — defaults work out of the box. No env vars required.
3. Set the production domain to `inspireu.org` (or whatever).

No `vercel.json` is required. Next.js detection handles the rest.

## Quality gates

Confirmed before handoff (run from project root):

- `npx tsc --noEmit` — no type errors
- `npm run lint` — no ESLint errors
- `npm run build` — production build passes; all routes statically prerendered
- Mobile (375px) and desktop (1440px) — no horizontal scroll, layouts hold up
- Lighthouse on `/` (production build):
  - **Performance: 94**
  - **Accessibility: 98**
  - **Best Practices: 100**

Re-run Lighthouse after content swap:

```bash
npm run build && npm run start &
sleep 4
npx lighthouse http://localhost:3000/ --view --only-categories=performance,accessibility,best-practices
```
