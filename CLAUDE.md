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

**Styling** uses Tailwind v4, which is imported via `@import "tailwindcss"` in `app/globals.css` — there is no separate `tailwind.config.*` file. Design tokens (`--background`, `--foreground`) are defined as CSS variables in `:root` and surfaced to Tailwind through `@theme inline`. Dark mode is handled via `@media (prefers-color-scheme: dark)`.

**Fonts** are loaded with `next/font/google` in the root layout as CSS variables (`--font-geist-sans`, `--font-geist-mono`) and consumed via `@theme inline` in `globals.css`.

**Path alias**: `@/*` resolves to the project root (e.g. `import Foo from "@/components/Foo"`).
