import { AppSidebar } from "@/components/layout/app-sidebar";
import { SiteHeader } from "@/components/layout/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import type { Workspace } from "@/types/workspace";

export function DashboardShell({
  title,
  workspace,
  children,
}: {
  title: string;
  workspace: Workspace;
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar workspace={workspace} />
      <SidebarInset>
        <SiteHeader title={title} />
        <div className="flex-1 p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
