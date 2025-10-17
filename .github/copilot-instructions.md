# Copilot Instructions for my-app

## Project Overview

This is a Next.js 15 application using the App Router, TypeScript, and shadcn/ui components with Tailwind CSS v4. The project follows a component-driven architecture with a comprehensive UI library built on Radix UI primitives.

## Architecture & Structure

### Directory Organization

- `src/app/` - Next.js App Router pages and layouts
- `src/components/ui/` - shadcn/ui components (40+ pre-built components)
- `src/components/` - Custom components (e.g., `theme-provider.tsx`, `mode-toggle.tsx`)
- `src/hooks/` - Custom React hooks (e.g., `use-mobile.ts`)
- `src/lib/` - Utility functions (`utils.ts` with `cn()` helper)
- `public/` - Static assets

### Path Aliases

All imports use TypeScript path aliases defined in `tsconfig.json`:

```typescript
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
```

## Key Technologies & Patterns

### Component Architecture

- **UI Components**: Built with Radix UI + class-variance-authority (CVA) for variants
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **Component Pattern**: All UI components use the `cn()` utility to merge Tailwind classes
- **Data Attributes**: Components use `data-slot`, `data-variant` for styling scopes (see `field.tsx`, `button.tsx`)

### Example Component Pattern

```typescript
const buttonVariants = cva(
  "base-classes",
  {
    variants: { variant: {...}, size: {...} },
    defaultVariants: { variant: "default", size: "default" },
  }
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
```

### State Management

- **Forms**: React Hook Form + Zod validation (see `src/components/ui/form.tsx`)
- **Themes**: `next-themes` with system/light/dark modes (configured in `layout.tsx`)
- **Global State**: Zustand (imported but usage not yet visible)
- **Server State**: TanStack Query v5 with devtools enabled
- **URL State**: nuqs library for type-safe URL search params (wrapped in `NuqsAdapter` in layout)

### Styling System

- **Tailwind v4**: Uses new `@import "tailwindcss"` syntax in `globals.css`
- **CSS Variables**: Theme colors defined inline with `@theme` directive
- **Dark Mode**: Custom variant `@custom-variant dark (&:is(.dark *))` in `globals.css`
- **Animations**: `tw-animate-css` package for additional animations
- **Container Queries**: Components use `@container` utilities (e.g., `@container/field-group`)

## Development Workflows

### Build & Run Commands

```bash
bun run dev        # Start dev server with Turbopack
bun run build      # Production build with Turbopack
bun start          # Start production server
bun run lint       # Run ESLint
bun run lint:fix   # Auto-fix ESLint issues
```

### Adding shadcn/ui Components

This project uses shadcn/ui configured with:

- Style: `new-york`
- Icon library: `lucide-react`
- Base color: `neutral`
- CSS variables enabled

When adding components, they auto-install to `src/components/ui/` with proper path aliases.

### Font Loading

Uses Next.js font optimization with Geist Sans and Geist Mono (see `layout.tsx`):

```typescript
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
```

## Project-Specific Conventions

### Client Components

Mark components with `"use client"` when they use:

- React hooks (useState, useEffect, etc.)
- Browser APIs
- Event handlers
- Context consumers (useTheme, useSidebar, useFormContext)

### ESLint Configuration

- Uses flat config format (`eslint.config.mjs`)
- Extends `next/core-web-vitals` and `next/typescript`
- Ignores: `.next/`, `node_modules/`, `out/`, `build/`, `next-env.d.ts`

### Theme Implementation

- Theme provider wraps entire app in `layout.tsx` with `suppressHydrationWarning`
- Toaster (Sonner) configured with `richColors` and `bottom-right` position
- Mode toggle uses dropdown with Light/Dark/System options

### TypeScript Configuration

- Target: ES2017
- Strict mode enabled
- Incremental builds for faster compilation
- No emit (Next.js handles builds)

## Common Integration Points

### Adding New Pages

Create files in `src/app/[route]/page.tsx` using App Router conventions. All pages are Server Components by default.

### Form Handling

Use the Form component from `@/components/ui/form` which integrates:

- React Hook Form for state management
- Zod resolver for validation
- Custom Field components for consistent styling

### Toasts/Notifications

Use Sonner toast library (already configured in layout):

```typescript
import { toast } from "sonner";
toast.success("Message");
```

### Mobile Detection

Use the `useIsMobile` hook for responsive behavior (used in sidebar and other components).

## Notes for AI Agents

- Never modify files in `src/components/ui/` unless explicitly requested - these are managed by shadcn/ui
- Always use the `cn()` utility when combining Tailwind classes
- Prefer Server Components; only add `"use client"` when necessary
- Use the established CVA pattern for component variants
- Follow the data-slot pattern for component composition (see existing UI components)
- Import icons from `lucide-react` package
