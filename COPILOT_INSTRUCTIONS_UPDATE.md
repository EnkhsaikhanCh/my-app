# Copilot Instructions Update Summary

## Changes Made to `.github/copilot-instructions.md`

The file has been successfully updated to include comprehensive backend architecture documentation while preserving all existing frontend guidance.

### ✅ New Sections Added

#### 1. **Backend Architecture (tRPC + Drizzle ORM)**

- Added complete 7-step data flow diagram showing how type safety flows from database → tRPC → React
- Explains the critical pattern: types auto-flow via `AppRouter`, no manual typing needed
- Documents each layer: DB schema → context → routers → app router → route handler → client → React hooks

#### 2. **Query Defaults Pattern**

- Documents the `defaultQueryOptions` pattern in `src/lib/query-options.ts`
- Explains why: prevents aggressive TanStack Query refetching behavior
- Shows usage pattern for merging into `useQuery` calls

#### 3. **Database Workflows**

- Added complete Drizzle ORM command reference:
  - `bun run db:generate` - generate migrations
  - `bun run db:migrate` - run migrations
  - `bun run db:push` - direct schema push (dev only)
  - `bun run db:studio` - Drizzle Studio GUI
- Schema change workflow (3-step process)
- Environment requirements (SUPABASE_DB_URL)
- Driver clarification (postgres package, not @vercel/postgres)

#### 4. **Adding New Backend Features**

- 3-step workflow for creating new tRPC endpoints
- Shows where to create routers, how to register them, and how to use them in frontend
- Emphasizes automatic type flow (no manual imports)

#### 5. **Error Handling Documentation**

- Documents global error handling in `src/lib/trpc.ts`
- Explains automatic toast notifications with retry actions

### ✅ Updated Sections

#### Project Overview

- Changed from "Next.js 15 application" to "Next.js 15 **fullstack** application"
- Added backend tech stack: tRPC, Drizzle ORM
- Clarified architecture: single-project structure with type-safe API

#### Directory Organization

- Added backend directories:
  - `src/app/api/trpc/[trpc]/` - tRPC route handler
  - `src/server/trpc/` - Backend routers and procedures
  - `src/db/` - Drizzle schemas
  - `drizzle/` - Migrations
- Updated `src/lib/` description to include backend utilities
- Added hooks directory with backend example (`useTodo.ts`)
- Added config and constants directories

#### Path Aliases

- Added backend import examples:
  - `import { trpc } from "@/lib/trpc"`
  - `import { db } from "@/lib/drizzle"`

### ✅ Preserved Content

All existing frontend documentation remains intact:

- Component architecture patterns (CVA, Radix UI, data-slot)
- Styling system (Tailwind v4, CSS variables, dark mode)
- State management (forms, themes, TanStack Query, URL state)
- All 40+ shadcn/ui component references
- Client component rules
- ESLint, TypeScript, font loading configs
- Form handling patterns
- Toast notifications
- Mobile detection hooks

## Key Improvements

1. **Immediately Actionable**: AI agents can now understand the full stack architecture by reading one file
2. **Shows "The Why"**: Explains architectural decisions (e.g., why use `defaultQueryOptions`, why type safety flows automatically)
3. **Complete Workflows**: Documents non-obvious commands and multi-step processes
4. **Integration Points**: Shows how to add new features end-to-end (database → backend → frontend)
5. **Project-Specific**: All examples come from actual codebase files, not generic advice

## Files Referenced

The updated instructions reference these key architectural files:

- `src/server/trpc/index.ts` - App router
- `src/server/trpc/routers/todo.ts` - Example router
- `src/server/trpc/context.ts` - Context setup
- `src/app/api/trpc/[trpc]/route.ts` - Route handler
- `src/lib/trpc.ts` - Client setup
- `src/lib/query-options.ts` - Query defaults
- `src/hooks/useTodo.ts` - Custom hook pattern
- `src/db/schema.ts` - Database schema
- `drizzle.config.ts` - DB config

## Next Steps

The instructions are ready to use! If you'd like to refine any sections, here are some areas we could expand:

1. **Authentication patterns** (if/when implemented)
2. **Testing workflows** (if tests exist)
3. **Deployment process** (Vercel-specific configs, env vars)
4. **Environment variable documentation** (full list beyond SUPABASE_DB_URL)
5. **Error boundary patterns** (if custom error handling exists)
6. **Multi-layout patterns** (dashboard vs admin layouts)

Would you like me to expand any of these areas?
