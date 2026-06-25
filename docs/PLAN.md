# PLANO DE EXECUÇÃO — PipeFlow CRM

Baseado em [CLAUDE.md](../CLAUDE.md) e [docs/PRD.md](PRD.md).

Estratégia: **interface primeiro (com dados mockados), backend depois**. Cada milestone é incremental, testável isoladamente, e termina com um commit que fecha a entrega. Branches saem de `main` e devem ser mergeadas (PR ou merge direto) antes de iniciar a próxima quando houver dependência.

---

## Milestone 0 — Setup do Projeto

**Branch:** `chore/project-setup`

**Objetivo:** Preparar a base técnica do repositório antes de qualquer feature.

**Entregas:**

- [x] Configurar shadcn/ui (init + tema neutro base)
- [x] Instalar e configurar dependências core: `@dnd-kit/core`, `recharts`, `@supabase/supabase-js`, `@supabase/ssr`, `stripe`, `resend`, `zod`
- [x] Estrutura de pastas (`src/components`, `src/lib`, `src/types`) conforme definido no CLAUDE.md
- [x] Configurar variáveis de ambiente (`.env.local.example`)
- [x] Configurar ESLint/Prettier e scripts de lint no `package.json`
- [x] README atualizado com instruções de setup local

**Commit final:** `chore: project setup (shadcn, deps, folder structure, env)`

---

## Milestone 1 — Design System Base

**Branch:** `feature/design-system`

**Objetivo:** Criar os blocos de UI reutilizáveis que sustentam todas as telas seguintes.

**Entregas:**

- [x] Componentes shadcn/ui instalados (Button, Input, Card, Dialog, Dropdown, Badge, Avatar, Table, Tabs, Toast)
- [x] Layout base (header, sidebar, container) sem lógica de dados
- [x] Tipografia e paleta de cores definidas em `globals.css` / `tailwind.config`
- [x] Componente de WorkspaceSwitcher (visual, sem dados reais)
- [x] Dark mode opcional (se aplicável ao design)

**Commit final:** `feat: base design system and layout shell`

---

## Milestone 2 — Landing Page

**Branch:** `feature/landing-page`

**Objetivo:** Página pública de apresentação do PipeFlow CRM.

**Entregas:**

- [x] Seção Hero
- [x] Seção Funcionalidades
- [x] Seção Planos e Preços (Free vs Pro)
- [x] Seção CTA final
- [x] Header/Footer públicos
- [x] Responsividade mobile

**Commit final:** `feat: public landing page`

---

## Milestone 3 — Telas de Autenticação (UI)

**Branch:** `feature/auth-ui`

**Objetivo:** Construir as telas de login/signup sem integração real (mock de submit).

**Entregas:**

- [x] Página de Login
- [x] Página de Signup
- [x] Página de recuperação de senha
- [x] Estados de erro/loading visuais
- [x] Layout `(auth)` isolado do dashboard

**Commit final:** `feat: auth screens UI (no backend)`

---

## Milestone 4 — Dashboard Shell + Métricas (UI mock)

**Branch:** `feature/dashboard-ui`

**Objetivo:** Construir o shell autenticado e o dashboard de métricas com dados mockados.

**Entregas:**

- [x] Layout `(dashboard)/[workspaceSlug]` com sidebar de navegação
- [x] Cards de métricas (total leads, negócios abertos, valor pipeline, taxa de conversão) com dados mock
- [x] Gráfico de funil de vendas (Recharts) com dados mock
- [x] Lista de "negócios com prazo próximo" mockada
- [x] WorkspaceSwitcher funcional no front (troca entre workspaces mock)

**Commit final:** `feat: dashboard shell and metrics UI (mock data)`

---

## Milestone 5 — Leads e Contatos (UI mock)

**Branch:** `feature/leads-ui`

**Objetivo:** Telas de gestão de leads sem persistência real.

**Entregas:**

- [ ] Listagem de leads com busca e filtros (status, responsável, data) sobre dados mock
- [ ] Formulário de cadastro/edição de lead (nome, e-mail, telefone, empresa, cargo, status)
- [ ] Página de detalhe do lead com perfil completo
- [ ] Timeline de atividades (visual, mock)

**Commit final:** `feat: leads list, detail and forms UI (mock data)`

---

## Milestone 6 — Pipeline Kanban (UI mock)

**Branch:** `feature/kanban-ui`

**Objetivo:** Construir o pipeline visual com drag-and-drop funcional sobre estado local.

**Entregas:**

- [ ] Colunas fixas: Novo Lead, Contato Realizado, Proposta Enviada, Negociação, Fechado Ganho, Fechado Perdido
- [ ] Cards de negócio (título, valor estimado, lead vinculado, responsável, prazo)
- [ ] Drag-and-drop entre colunas com `@dnd-kit` (estado em memória, sem persistência)
- [ ] Modal/drawer de criação e edição de negócio

**Commit final:** `feat: kanban pipeline UI with drag-and-drop (local state)`

---

## Milestone 7 — Registro de Atividades (UI mock)

**Branch:** `feature/activities-ui`

**Objetivo:** Completar a timeline de atividades do lead.

**Entregas:**

- [ ] Formulário de nova atividade (Ligação, E-mail, Reunião, Nota)
- [ ] Timeline cronológica completa na página de detalhe do lead
- [ ] Autor e data exibidos por atividade

**Commit final:** `feat: activity log and timeline UI (mock data)`

---

## Milestone 8 — Supabase: Setup, Schema e Auth Real

**Branch:** `feature/supabase-auth`

**Objetivo:** Conectar autenticação real e modelar o banco de dados.

**Entregas:**

- [ ] Projeto Supabase criado e linkado (env vars)
- [ ] Schema inicial: `workspaces`, `workspace_members`, `leads`, `deals`, `activities`
- [ ] Row Level Security habilitada e policies por `workspace_id`
- [ ] Integração Supabase Auth nas telas de login/signup/logout
- [ ] Middleware de proteção de rotas `(dashboard)`
- [ ] Client/server helpers em `lib/supabase`

**Commit final:** `feat: supabase schema, RLS policies and real auth`

---

## Milestone 9 — Multi-empresa e Colaboração (backend)

**Branch:** `feature/workspaces-backend`

**Objetivo:** Ativar workspaces reais, papéis e convites por e-mail.

**Entregas:**

- [ ] CRUD de workspace (criação ao cadastrar usuário)
- [ ] Papéis Admin/Membro persistidos e validados no backend
- [ ] Convite de colaborador via Resend (envio + aceite)
- [ ] WorkspaceSwitcher consumindo dados reais
- [ ] Isolamento de dados validado entre workspaces (teste manual cruzado)

**Commit final:** `feat: multi-workspace collaboration and email invites`

---

## Milestone 10 — Leads e Contatos (backend)

**Branch:** `feature/leads-backend`

**Objetivo:** Persistir e conectar a tela de leads ao Supabase.

**Entregas:**

- [ ] CRUD de leads via Server Actions, escopado por workspace
- [ ] Busca e filtros server-side (status, responsável, data)
- [ ] Validação de dados com `zod`
- [ ] Enforço do limite do plano Free (50 leads) no backend

**Commit final:** `feat: leads CRUD wired to Supabase`

---

## Milestone 11 — Pipeline Kanban (backend)

**Branch:** `feature/kanban-backend`

**Objetivo:** Persistir negócios e movimentação entre etapas.

**Entregas:**

- [ ] CRUD de negócios (`deals`) vinculados a lead e responsável
- [ ] Persistência da etapa ao soltar o card (drag-and-drop -> update no banco)
- [ ] Otimistic update no front com rollback em caso de erro

**Commit final:** `feat: kanban pipeline persisted to Supabase`

---

## Milestone 12 — Atividades (backend)

**Branch:** `feature/activities-backend`

**Objetivo:** Persistir atividades e ligar à timeline real do lead.

**Entregas:**

- [ ] CRUD de atividades vinculadas a lead, autor e data
- [ ] Timeline consumindo dados reais ordenados cronologicamente

**Commit final:** `feat: activities CRUD wired to Supabase`

---

## Milestone 13 — Dashboard com Dados Reais

**Branch:** `feature/dashboard-backend`

**Objetivo:** Substituir os dados mock do dashboard por queries reais.

**Entregas:**

- [ ] Queries de métricas (total leads, negócios abertos, valor pipeline, taxa de conversão)
- [ ] Gráfico de funil alimentado por dados reais do workspace
- [ ] Lista de negócios com prazo próximo do usuário logado

**Commit final:** `feat: dashboard metrics wired to real data`

---

## Milestone 14 — Monetização (Stripe)

**Branch:** `feature/stripe-billing`

**Objetivo:** Implementar planos Free/Pro com cobrança recorrente.

**Entregas:**

- [ ] Stripe Checkout para upgrade ao plano Pro (R$49/mês)
- [ ] Webhook para ativar/desativar plano no workspace
- [ ] Customer Portal para gestão da assinatura
- [ ] Enforço de limites (Free: 2 colaboradores / 50 leads) bloqueando ações no backend
- [ ] Tela de Planos dentro do app (settings)

**Commit final:** `feat: stripe checkout, webhook and plan limit enforcement`

---

## Milestone 15 — Onboarding e Polimento

**Branch:** `feature/onboarding-polish`

**Objetivo:** Fechar lacunas de experiência antes do deploy final.

**Entregas:**

- [ ] Fluxo de onboarding pós-signup (criar primeiro workspace, primeiro lead)
- [ ] Estados vazios (empty states) em listas e pipeline
- [ ] Tratamento de erros e mensagens de feedback (toasts)
- [ ] Revisão de responsividade mobile em todas as telas
- [ ] Revisão de acessibilidade básica (labels, foco, contraste)

**Commit final:** `feat: onboarding flow and UX polish`

---

## Milestone 16 — Deploy

**Branch:** `chore/deploy`

**Objetivo:** Publicar a aplicação em produção.

**Entregas:**

- [ ] Projeto linkado e configurado na Vercel
- [ ] Variáveis de ambiente de produção configuradas (Supabase, Stripe, Resend)
- [ ] Supabase em produção com migrations aplicadas
- [ ] Webhooks do Stripe apontando para a URL de produção
- [ ] Domínio configurado (se aplicável)
- [ ] Smoke test do fluxo completo em produção (signup → workspace → lead → pipeline → billing)

**Commit final:** `chore: production deploy configuration`

---

## Ordem de Execução

```
M0 → M1 → M2 → M3 → M4 → M5 → M6 → M7   (UI completa, dados mock)
        → M8 → M9 → M10 → M11 → M12 → M13   (backend real, substitui mocks)
        → M14   (monetização)
        → M15   (onboarding/polish)
        → M16   (deploy)
```
