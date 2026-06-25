import { KanbanSquare, LayoutDashboard, Settings, Users } from "lucide-react";

export type NavItem = {
  title: string;
  segment: string;
  icon: typeof LayoutDashboard;
  enabled: boolean;
};

// Leads (Milestone 5), Pipeline (Milestone 6) e Configurações ainda não têm páginas reais.
export const mainNavItems: NavItem[] = [
  { title: "Dashboard", segment: "dashboard", icon: LayoutDashboard, enabled: true },
  { title: "Leads", segment: "leads", icon: Users, enabled: false },
  { title: "Pipeline", segment: "pipeline", icon: KanbanSquare, enabled: false },
  { title: "Configurações", segment: "settings", icon: Settings, enabled: false },
];
