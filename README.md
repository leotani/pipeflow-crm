# PipeFlow CRM

Multi-tenant sales CRM SaaS: leads/contacts, Kanban sales pipeline, activity timeline, multi-workspace collaboration, and Stripe-based monetization. Full product spec in [docs/PRD.md](docs/PRD.md), execution plan in [docs/PLAN.md](docs/PLAN.md).

## Tech Stack

- **Framework:** Next.js (App Router) + React + TypeScript 5
- **Styling/UI:** Tailwind CSS + shadcn/ui
- **Database/Auth:** Supabase (PostgreSQL + Row Level Security + Auth)
- **Payments:** Stripe (Checkout + webhooks + Customer Portal)
- **Email:** Resend (transactional, invites)
- **Drag-and-drop:** @dnd-kit (Kanban pipeline)
- **Charts:** Recharts (dashboard funnel/metrics)
- **Deploy:** Vercel

## Getting Started

### Prerequisites

- Node.js 20+
- A [Supabase](https://supabase.com) project (for auth/database)
- A [Stripe](https://stripe.com) account (for billing)
- A [Resend](https://resend.com) account (for transactional email)

### Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the environment variable template and fill in your own keys:

   ```bash
   cp .env.local.example .env.local
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see the result.

### Scripts

| Script                 | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start the dev server                     |
| `npm run build`        | Production build                         |
| `npm run start`        | Start the production server              |
| `npm run lint`         | Run ESLint                               |
| `npm run lint:fix`     | Run ESLint and auto-fix issues           |
| `npm run format`       | Format the codebase with Prettier        |
| `npm run format:check` | Check formatting without writing changes |

## Project Structure

```
src/
  app/
    (marketing)/          # public landing page
    (auth)/                # login, signup
    (dashboard)/
      [workspaceSlug]/
        leads/
        pipeline/
        dashboard/
        settings/
    api/                   # route handlers (stripe webhook, resend, etc.)
  components/
    ui/                    # shadcn/ui primitives
    kanban/
    leads/
    dashboard/
  lib/
    supabase/              # client/server helpers, RLS-aware queries
    stripe/
    resend/
  types/
docs/
  PRD.md
  PLAN.md
```

See [CLAUDE.md](CLAUDE.md) for conventions (multi-tenancy via RLS, role enforcement, plan limits) that all contributions must follow.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Supabase Documentation](https://supabase.com/docs)

## Deploy on Vercel

The easiest way to deploy this app is via the [Vercel Platform](https://vercel.com/new). Remember to configure the same environment variables from `.env.local.example` in your Vercel project settings.
