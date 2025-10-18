# Fullstack Todo App

A production-ready fullstack Todo application built with Next.js 15 (App Router), tRPC, Supabase, and Drizzle ORM.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Runtime**: Bun
- **Database**: Supabase (PostgreSQL)
- **ORM**: Drizzle ORM
- **API**: tRPC v11
- **State Management**: TanStack Query (React Query)
- **UI**: shadcn/ui + Tailwind CSS v4
- **Type Safety**: TypeScript

## 📁 Project Structure

```
my-app/
├─ src/
│   ├─ app/
│   │   ├─ api/
│   │   │   └─ trpc/[trpc]/route.ts     # tRPC Route Handler
│   │   ├─ page.tsx                     # Todo UI (Client Component)
│   │   └─ layout.tsx                   # Root Layout with Providers
│   ├─ lib/
│   │   ├─ drizzle.ts                   # Drizzle client config
│   │   └─ trpc.tsx                     # tRPC React client & Provider
│   ├─ server/
│   │   └─ trpc/
│   │       ├─ context.ts               # tRPC context with DB
│   │       ├─ index.ts                 # App router
│   │       └─ routers/
│   │           └─ todo.ts              # Todo CRUD procedures
│   └─ db/
│       └─ schema.ts                    # Drizzle schema (todos table)
├─ drizzle/                             # Generated migrations
├─ drizzle.config.ts                    # Drizzle Kit config
├─ .env.local                           # Environment variables
└─ package.json
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
bun install
```

### 2. Configure Database

Create a `.env.local` file in the root directory:

```env
# Supabase Database URL
# Format: postgresql://postgres:[YOUR-PASSWORD]@[YOUR-PROJECT-REF].supabase.co:5432/postgres
SUPABASE_DB_URL=postgresql://postgres:your-password@db.your-project.supabase.co:5432/postgres
```

**Get your Supabase URL:**

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to Settings → Database
4. Copy the "Connection String" (URI format)
5. Replace `[YOUR-PASSWORD]` with your database password

### 3. Generate and Run Migrations

```bash
# Generate migration files from schema
bun run db:generate

# Push schema to database (or run migrations)
bun run db:push
```

### 4. Start Development Server

```bash
bun run dev
```

Open [http://localhost:3000/dashboard/todo](http://localhost:3000/dashboard/todo) to see the Todo app.

## 📝 Available Scripts

| Command               | Description                             |
| --------------------- | --------------------------------------- |
| `bun run dev`         | Start development server with Turbopack |
| `bun run build`       | Build for production                    |
| `bun start`           | Start production server                 |
| `bun run lint`        | Run ESLint                              |
| `bun run lint:fix`    | Auto-fix linting issues                 |
| `bun run db:generate` | Generate migration files from schema    |
| `bun run db:push`     | Push schema directly to database        |
| `bun run db:migrate`  | Run migrations                          |
| `bun run db:studio`   | Open Drizzle Studio (database GUI)      |

## 🎯 Features

### Todo CRUD Operations

- ✅ **Create** - Add new todos with input + button
- ✅ **Read** - View all todos in a list
- ✅ **Toggle** - Mark todos as complete/incomplete with checkbox
- ✅ **Delete** - Remove todos with trash icon button

### Technical Features

- 🔒 **Type Safety** - End-to-end TypeScript types from DB to UI
- ⚡ **Optimistic Updates** - Instant UI feedback with TanStack Query
- 🎨 **Beautiful UI** - Clean design with shadcn/ui components
- 🌙 **Dark Mode** - Built-in theme support (system/light/dark)
- 📱 **Responsive** - Mobile-friendly design
- 🚀 **Production Ready** - Proper error handling and loading states

## 🗄️ Database Schema

### `todos` Table

| Column       | Type      | Constraints             |
| ------------ | --------- | ----------------------- |
| `id`         | text      | PRIMARY KEY             |
| `title`      | text      | NOT NULL                |
| `completed`  | boolean   | NOT NULL, DEFAULT false |
| `created_at` | timestamp | NOT NULL, DEFAULT now() |

## 🔌 API Endpoints

### tRPC Procedures

All procedures are available under the `todo` namespace:

- `todo.getAll` - Query to fetch all todos (ordered by creation date)
- `todo.create` - Mutation to create a new todo
- `todo.toggle` - Mutation to toggle todo completion status
- `todo.delete` - Mutation to delete a todo by ID

**Example Usage:**

```tsx
// In a client component
import { trpc } from "@/lib/trpc";

function MyComponent() {
  const { data: todos } = trpc.todo.getAll.useQuery();
  const createTodo = trpc.todo.create.useMutation();

  const handleAdd = () => {
    createTodo.mutate({ title: "New todo" });
  };

  return <div>{/* ... */}</div>;
}
```

## 🏗️ Architecture

### tRPC Setup

1. **Context** (`src/server/trpc/context.ts`) - Provides the Drizzle DB client to all procedures
2. **Router** (`src/server/trpc/index.ts`) - Defines the app router structure
3. **Procedures** (`src/server/trpc/routers/todo.ts`) - Implements CRUD operations
4. **Route Handler** (`src/app/api/trpc/[trpc]/route.ts`) - Next.js API route using `fetchRequestHandler`
5. **Client** (`src/lib/trpc.tsx`) - React client with `TRPCProvider` wrapper

### Data Flow

```
UI Component (page.tsx)
    ↓ trpc.todo.getAll.useQuery()
TRPCProvider (lib/trpc.tsx)
    ↓ HTTP Request
Route Handler (api/trpc/[trpc]/route.ts)
    ↓ fetchRequestHandler
App Router (server/trpc/index.ts)
    ↓ todo.getAll
Todo Router (server/trpc/routers/todo.ts)
    ↓ ctx.db.select()
Drizzle Client (lib/drizzle.ts)
    ↓ SQL Query
Supabase Database
```

## 🎨 UI Components

Built with shadcn/ui components:

- `Button` - Add todo and delete buttons
- `Input` - Todo title input field
- `Checkbox` - Toggle completion status
- Theme toggle (inherited from existing setup)

## 🔧 Configuration Files

- `drizzle.config.ts` - Drizzle Kit configuration for migrations
- `tsconfig.json` - TypeScript compiler options with path aliases
- `components.json` - shadcn/ui configuration
- `.env.local` - Environment variables (DATABASE_URL)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [tRPC Documentation](https://trpc.io/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team/)
- [Supabase Documentation](https://supabase.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TanStack Query Documentation](https://tanstack.com/query/latest)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add `SUPABASE_DB_URL` environment variable
4. Deploy!

Vercel automatically detects Next.js and configures the build.

### Database Migration

Before deploying, ensure your database is migrated:

```bash
bun run db:push
```

Or set up automatic migrations in your deployment pipeline.

## 🐛 Troubleshooting

### "Cannot connect to database"

- Check your `SUPABASE_DB_URL` in `.env.local`
- Ensure your Supabase project is running
- Verify database password is correct

### "Module not found" errors

- Run `bun install` to ensure all dependencies are installed
- Check that path aliases in `tsconfig.json` are correct

### tRPC errors

- Ensure the tRPC route handler is at `src/app/api/trpc/[trpc]/route.ts`
- Verify `TRPCProvider` wraps your app in `layout.tsx`
- Check browser console for detailed error messages

## 📝 License

MIT

## 🙌 Credits

Built with love using the modern Next.js stack.
