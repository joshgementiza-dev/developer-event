# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint     # run ESLint
```

No test runner is configured yet.

## Architecture

Next.js 16 App Router project with React 19, TypeScript (strict), and Tailwind CSS v4.

**Routing** follows the App Router convention: files under `app/` map to routes. `app/layout.tsx` is the root layout (sets fonts and `<html>`/`<body>`); `app/page.tsx` is the home route. Add new routes by creating `app/<segment>/page.tsx`.

**Styling** uses Tailwind v4, imported via `@import "tailwindcss"` in `app/globals.css` — there is no `tailwind.config.*` file. Design tokens are CSS variables defined in `.dark {}` in `globals.css` and surfaced to Tailwind through `@theme inline`.

**Dark mode** is class-based, not media-query-based. The `dark` class is applied to `<html>` in `app/layout.tsx`. The custom variant is declared as `@custom-variant dark (&:is(.dark *))` in `globals.css`. Always use `dark:` utilities and never `@media (prefers-color-scheme: dark)`.

**Fonts** are loaded with `next/font/google` in the root layout as CSS variables (`--font-geist-sans`, `--font-geist-mono`) consumed via `@theme inline`.

**Path alias**: `@/*` resolves to the project root.

## Key Patterns

### Button with Link

`Button` from `@base-ui/react` does **not** support `asChild`. Never wrap `<Link>` in `<Button>`. Instead, apply `buttonVariants()` directly on `<Link>`:

```tsx
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

<Link href="/foo" className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>
  Label
</Link>
```

### Stretched-link card (EventCard pattern)

Cards that need a full-surface click area with inner interactive elements (e.g. a Save button):
- `<article>` gets `relative`
- The title `<Link>` gets `after:absolute after:inset-0`
- Any elements that must stay clickable above the overlay get `relative z-10`

### Whole-card-as-link (CategoryCard / SpeakerCard / OrganizerCard)

When there are no inner interactive elements, make the entire card a `<Link>` directly. Add `focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background` for keyboard focus styling.

### Mobile CTA pattern

Sections with a "View All" action use two CTAs:
- Desktop: `className="hidden shrink-0 sm:flex"` inline with the section heading
- Mobile: `className="mt-6 sm:hidden"` full-width button below the grid

### Section background rhythm

Alternating backgrounds create visual separation between sections:
- Default background: `<section className="py-12 md:py-16">`
- Elevated surface: `<section className="bg-card py-12 md:py-16">`

Current order: Hero → Search → Categories (default) → FeaturedEvents (default) → UpcomingEvents (bg-card) → FeaturedSpeakers (default) → FeaturedOrganizers (bg-card) → CommunityCTA (default + glow) → Newsletter (bg-card).

### Icons

Uses `lucide-react`. Brand icons (GitHub, LinkedIn, Twitter/X) are **removed** from this version of lucide-react — use inline SVG components instead (see `components/layout/Footer.tsx` for examples).

### Placeholder images

Mock data uses `picsum.photos/seed/<name>/WxH` for stable, seed-based placeholder images:
- Event banners: `https://picsum.photos/seed/<slug>/800/450`
- Avatars (square): `https://picsum.photos/seed/<slug>/200/200`

Always add `picsum.photos` to `remotePatterns` in `next.config.ts` (already configured).

### Shared UI states

Three reusable state components in `components/shared/`:

- **`Skeleton`** — base pulse animation primitive, accepts `className` for size/shape
- **`EmptyState`** — accepts `icon: LucideIcon`, `title`, `description?`, `action?: { label, href }`. Use `role="status"`.
- **`ErrorState`** — Client Component, accepts `title?`, `description?`, `onRetry?: () => void`. Use in Next.js `error.tsx` boundaries by passing the `reset` function as `onRetry`.

## Design System

Colors (defined in `.dark {}` in `globals.css`):
- Primary: `#7C3AED` (purple)
- Background: `#09090B`
- Surface/card: `#18181B`
- Border/muted: `#27272A`
- Text: `#FAFAFA` / `#A1A1AA`
- Error: `#EF4444`

Use `bg-primary/10 text-primary` for tinted badges and icon containers. Use `text-muted-foreground` for secondary text.

## Development Workflow

This project follows **Spec-Driven Development**. Feature specs live in `_specs/`. Use `/implement <spec> Task <N>` to implement one task at a time. Never implement future tasks or modify unrelated files.

Components default to **Server Components**. Only use `"use client"` for forms, search inputs, dialogs, or anything requiring `useState`/`useEffect`/browser APIs.
