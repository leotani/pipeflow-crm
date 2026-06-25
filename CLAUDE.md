@AGENTS.md

# PipeFlow CRM

Multi-tenant sales CRM SaaS: leads/contacts, Kanban sales pipeline, activity timeline, multi-workspace collaboration, and Stripe-based monetization. Full product spec in [docs/PRD.md](docs/PRD.md).

## Tech Stack

- **Framework:** Next.js (App Router) + React + TypeScript 5
- **Styling/UI:** Tailwind CSS + shadcn/ui
- **Database/Auth:** Supabase (PostgreSQL + Row Level Security + Auth)
- **Payments:** Stripe (Checkout + webhooks + Customer Portal)
- **Email:** Resend (transactional, invites)
- **Drag-and-drop:** @dnd-kit (Kanban pipeline)
- **Charts:** Recharts (dashboard funnel/metrics)
- **Deploy:** Vercel

## Conventions

- App Router only; Server Components by default, Server Actions for mutations where suitable.
- TypeScript strict — no `any`.
- **Multi-tenancy is enforced via Supabase RLS.** Every query must be scoped to the current workspace. Never use the Supabase service-role key in user-facing request paths to bypass RLS.
- Roles (`admin` / `membro`) must be enforced at the data layer, not just hidden in the UI.
- Plan limits (Free: 2 collaborators / 50 leads; Pro: unlimited, R$49/mês) must be checked server-side before create/invite actions, not just in the UI — plan state is the source of truth from the Stripe webhook.

## Folder Structure (target)

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
```

## Visual Identity

Design references: **HubSpot CRM** and **Pipedrive**. Goal: Pipedrive-level Kanban UX with HubSpot's polish, but simpler — avoid feature bloat. Use shadcn/ui defaults (neutral theme) as the base design system until a specific palette/typography is defined.

## Domain Notes

- Pipeline stages (fixed): Novo Lead → Contato Realizado → Proposta Enviada → Negociação → Fechado Ganho / Fechado Perdido.
- Activity types: Ligação, E-mail, Reunião, Nota — each tied to a lead's timeline.
- Workspace = company/team; users can belong to multiple workspaces and switch via sidebar dropdown.
