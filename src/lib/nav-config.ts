import { KanbanSquare, LayoutDashboard, Settings, Users } from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  icon: typeof LayoutDashboard;
};

// Rotas reais chegam no Milestone 4 ((dashboard)/[workspaceSlug]/...); por enquanto são placeholders visuais.
export const mainNavItems: NavItem[] = [
  { title: "Dashboard", href: "#dashboard", icon: LayoutDashboard },
  { title: "Leads", href: "#leads", icon: Users },
  { title: "Pipeline", href: "#pipeline", icon: KanbanSquare },
  { title: "Configurações", href: "#settings", icon: Settings },
];
