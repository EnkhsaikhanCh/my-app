# Quick Start Guide - Todo App

## 🚀 Get Started in 3 Steps

### Step 1: Configure Database

Edit `.env.local`:

```env
SUPABASE_DB_URL=postgresql://postgres:YOUR_PASSWORD@db.YOUR_PROJECT.supabase.co:5432/postgres
```

Get your URL: Supabase Dashboard → Project → Settings → Database → Connection String

### Step 2: Push Schema

```bash
bun run db:push
```

### Step 3: Start Dev Server

```bash
bun run dev
```

Visit: http://localhost:3000

## ✅ What Works

- ➕ Add todos
- ✓ Mark complete/incomplete
- 🗑️ Delete todos
- 📊 View all todos

## 🛠️ Useful Commands

```bash
bun run dev           # Start dev server
bun run build         # Build for production
bun run db:generate   # Generate migrations
bun run db:push       # Push schema to DB
bun run db:studio     # Open Drizzle Studio
bun run lint          # Check code
```

## 📁 Key Files

```
src/app/page.tsx                      → Todo UI
src/app/api/trpc/[trpc]/route.ts     → API endpoint
src/server/trpc/routers/todo.ts      → CRUD logic
src/db/schema.ts                     → Database schema
```

## 🔧 Troubleshooting

**Can't connect to database?**

- Check `.env.local` has correct URL
- Verify password in connection string
- Make sure Supabase project is active

**tRPC not working?**

- Run `bun run db:push` first
- Check browser console for errors
- Restart dev server

**TypeScript errors?**

- Run `bun install`
- Restart VS Code TypeScript server

## 📚 Full Docs

- `TODO_APP_README.md` - Complete documentation
- `SETUP_COMPLETE.md` - Setup summary
- `BACKEND_IMPLEMENTATION.md` - Technical details

---

**Ready!** Configure your database and start building 🎉
