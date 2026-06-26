import { KanbanSquare, LayoutDashboard, Settings, Users } from "lucide-react";

export type NavItem = {
  title: string;
  segment: string;
  icon: typeof LayoutDashboard;
  enabled: boolean;
};

// Configurações ainda não tem página real.
export const mainNavItems: NavItem[] = [
  { title: "Dashboard", segment: "dashboard", icon: LayoutDashboard, enabled: true },
  { title: "Leads", segment: "leads", icon: Users, enabled: true },
  { title: "Pipeline", segment: "pipeline", icon: KanbanSquare, enabled: true },
  { title: "Configurações", segment: "settings", icon: Settings, enabled: false },
];
