# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production (static export)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

### Technology Stack
- **Next.js 15.3.2** with App Router and static export (`output: 'export'`)
- **TypeScript 5.2.2** with path aliases (`@/*` → `./src/*`)
- **Tailwind CSS v4** with custom design tokens and dark mode support
- **shadcn/ui** design system built on Radix UI primitives
- **next-themes** for theme management
- **Zustand** for client-side global state management
- **TanStack Query** for server state, caching, and data fetching

### Component Organization
- `src/components/ui/` - shadcn/ui components with variants using `class-variance-authority`
- `src/components/sections/` - Page-specific section components
- `src/components/layout/` - Reusable layout components (header, footer)
- Use `"use client"` directive for interactive components only

### Styling Patterns
- CSS variables defined in `src/app/globals.css` for theme tokens
- Primary brand colors: `--primary: 121 37% 27%` and `--primary-hover: 122 40% 22%`
- Responsive design with mobile-first approach using `lg:` breakpoints
- Tailwind utility classes with `cn()` helper for conditional styling

### Business Context
MowMore LLC lawn mower repair and sales service with sections for:
- Hero/landing page
- Services (repair, maintenance, sales)
- Gallery showcase
- Customer testimonials
- Contact information and service areas

### Static Export Configuration
- Images use `unoptimized: true` in next.config.js
- All pages export as static HTML for deployment
- No server-side features or API routes