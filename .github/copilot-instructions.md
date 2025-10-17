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

## shadcn/ui

> shadcn/ui is a collection of beautifully-designed, accessible components and a code distribution platform. It is built with TypeScript, Tailwind CSS, and Radix UI primitives. It supports multiple frameworks including Next.js, Vite, Remix, Astro, and more. Open Source. Open Code. AI-Ready. It also comes with a command-line tool to install and manage components and a registry system to publish and distribute code.

### Overview

- [Introduction](https://ui.shadcn.com/docs): Core principles—Open Code, Composition, Distribution, Beautiful Defaults, and AI-Ready design.
- [CLI](https://ui.shadcn.com/docs/cli): Command-line tool for installing and managing components.
- [components.json](https://ui.shadcn.com/docs/components-json): Configuration file for customizing the CLI and component installation.
- [Theming](https://ui.shadcn.com/docs/theming): Guide to customizing colors, typography, and design tokens.
- [Changelog](https://ui.shadcn.com/docs/changelog): Release notes and version history.
- [About](https://ui.shadcn.com/docs/about): Credits and project information.

### Installation

- [Next.js](https://ui.shadcn.com/docs/installation/next): Install shadcn/ui in a Next.js project.

### Components

#### Form & Input

- [Form](https://ui.shadcn.com/docs/components/form): Building forms with React Hook Form and Zod validation.
- [Field](https://ui.shadcn.com/docs/components/field): Field component for form inputs with labels and error messages.
- [Button](https://ui.shadcn.com/docs/components/button): Button component with multiple variants.
- [Button Group](https://ui.shadcn.com/docs/components/button-group): Group multiple buttons together.
- [Input](https://ui.shadcn.com/docs/components/input): Text input component.
- [Input Group](https://ui.shadcn.com/docs/components/input-group): Input component with prefix and suffix addons.
- [Input OTP](https://ui.shadcn.com/docs/components/input-otp): One-time password input component.
- [Textarea](https://ui.shadcn.com/docs/components/textarea): Multi-line text input component.
- [Checkbox](https://ui.shadcn.com/docs/components/checkbox): Checkbox input component.
- [Radio Group](https://ui.shadcn.com/docs/components/radio-group): Radio button group component.
- [Select](https://ui.shadcn.com/docs/components/select): Select dropdown component.
- [Switch](https://ui.shadcn.com/docs/components/switch): Toggle switch component.
- [Slider](https://ui.shadcn.com/docs/components/slider): Slider input component.
- [Calendar](https://ui.shadcn.com/docs/components/calendar): Calendar component for date selection.
- [Date Picker](https://ui.shadcn.com/docs/components/date-picker): Date picker component combining input and calendar.
- [Combobox](https://ui.shadcn.com/docs/components/combobox): Searchable select component with autocomplete.
- [Label](https://ui.shadcn.com/docs/components/label): Form label component.

#### Layout & Navigation

- [Accordion](https://ui.shadcn.com/docs/components/accordion): Collapsible accordion component.
- [Breadcrumb](https://ui.shadcn.com/docs/components/breadcrumb): Breadcrumb navigation component.
- [Navigation Menu](https://ui.shadcn.com/docs/components/navigation-menu): Accessible navigation menu with dropdowns.
- [Sidebar](https://ui.shadcn.com/docs/components/sidebar): Collapsible sidebar component for app layouts.
- [Tabs](https://ui.shadcn.com/docs/components/tabs): Tabbed interface component.
- [Separator](https://ui.shadcn.com/docs/components/separator): Visual divider between content sections.
- [Scroll Area](https://ui.shadcn.com/docs/components/scroll-area): Custom scrollable area with styled scrollbars.
- [Resizable](https://ui.shadcn.com/docs/components/resizable): Resizable panel layout component.

#### Overlays & Dialogs

- [Dialog](https://ui.shadcn.com/docs/components/dialog): Modal dialog component.
- [Alert Dialog](https://ui.shadcn.com/docs/components/alert-dialog): Alert dialog for confirmation prompts.
- [Sheet](https://ui.shadcn.com/docs/components/sheet): Slide-out panel component (drawer).
- [Drawer](https://ui.shadcn.com/docs/components/drawer): Mobile-friendly drawer component using Vaul.
- [Popover](https://ui.shadcn.com/docs/components/popover): Floating popover component.
- [Tooltip](https://ui.shadcn.com/docs/components/tooltip): Tooltip component for additional context.
- [Hover Card](https://ui.shadcn.com/docs/components/hover-card): Card that appears on hover.
- [Context Menu](https://ui.shadcn.com/docs/components/context-menu): Right-click context menu.
- [Dropdown Menu](https://ui.shadcn.com/docs/components/dropdown-menu): Dropdown menu component.
- [Menubar](https://ui.shadcn.com/docs/components/menubar): Horizontal menubar component.
- [Command](https://ui.shadcn.com/docs/components/command): Command palette component (cmdk).

#### Feedback & Status

- [Alert](https://ui.shadcn.com/docs/components/alert): Alert component for messages and notifications.
- [Toast](https://ui.shadcn.com/docs/components/toast): Toast notification component using Sonner.
- [Progress](https://ui.shadcn.com/docs/components/progress): Progress bar component.
- [Spinner](https://ui.shadcn.com/docs/components/spinner): Loading spinner component.
- [Skeleton](https://ui.shadcn.com/docs/components/skeleton): Skeleton loading placeholder.
- [Badge](https://ui.shadcn.com/docs/components/badge): Badge component for labels and status indicators.
- [Empty](https://ui.shadcn.com/docs/components/empty): Empty state component for no data scenarios.

#### Display & Media

- [Avatar](https://ui.shadcn.com/docs/components/avatar): Avatar component for user profiles.
- [Card](https://ui.shadcn.com/docs/components/card): Card container component.
- [Table](https://ui.shadcn.com/docs/components/table): Table component for displaying data.
- [Data Table](https://ui.shadcn.com/docs/components/data-table): Advanced data table with sorting, filtering, and pagination.
- [Chart](https://ui.shadcn.com/docs/components/chart): Chart components using Recharts.
- [Carousel](https://ui.shadcn.com/docs/components/carousel): Carousel component using Embla Carousel.
- [Aspect Ratio](https://ui.shadcn.com/docs/components/aspect-ratio): Container that maintains aspect ratio.
- [Typography](https://ui.shadcn.com/docs/components/typography): Typography styles and components.
- [Item](https://ui.shadcn.com/docs/components/item): Generic item component for lists and menus.
- [Kbd](https://ui.shadcn.com/docs/components/kbd): Keyboard shortcut display component.

#### Misc

- [Collapsible](https://ui.shadcn.com/docs/components/collapsible): Collapsible container component.
- [Toggle](https://ui.shadcn.com/docs/components/toggle): Toggle button component.
- [Toggle Group](https://ui.shadcn.com/docs/components/toggle-group): Group of toggle buttons.
- [Pagination](https://ui.shadcn.com/docs/components/pagination): Pagination component for lists and tables.

### Dark Mode

- [Dark Mode](https://ui.shadcn.com/docs/dark-mode): Overview of dark mode implementation.
- [Dark Mode - Next.js](https://ui.shadcn.com/docs/dark-mode/next): Dark mode setup for Next.js.

### Forms

- [Forms Overview](https://ui.shadcn.com/docs/forms): Guide to building forms with shadcn/ui.
- [React Hook Form](https://ui.shadcn.com/docs/forms/react-hook-form): Using shadcn/ui with React Hook Form.
- [TanStack Form](https://ui.shadcn.com/docs/forms/tanstack-form): Using shadcn/ui with TanStack Form.
- [Forms - Next.js](https://ui.shadcn.com/docs/forms/next): Building forms in Next.js with Server Actions.

### Advanced

- [Monorepo](https://ui.shadcn.com/docs/monorepo): Using shadcn/ui in a monorepo setup.
- [React 19](https://ui.shadcn.com/docs/react-19): React 19 support and migration guide.
- [Tailwind CSS v4](https://ui.shadcn.com/docs/tailwind-v4): Tailwind CSS v4 support and setup.
- [JavaScript](https://ui.shadcn.com/docs/javascript): Using shadcn/ui with JavaScript (no TypeScript).
- [Figma](https://ui.shadcn.com/docs/figma): Figma design resources.
- [v0](https://ui.shadcn.com/docs/v0): Generating UI with v0 by Vercel.

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
