import { notFound } from "next/navigation";

import { DashboardShell } from "@/components/layout/dashboard-shell";
import { mockWorkspaces } from "@/lib/mock/workspaces";

export default async function WorkspaceLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ workspaceSlug: string }>;
}) {
  const { workspaceSlug } = await params;
  const workspace = mockWorkspaces.find((w) => w.slug === workspaceSlug);

  if (!workspace) {
    notFound();
  }

  return (
    <DashboardShell title="Dashboard" workspace={workspace}>
      {children}
    </DashboardShell>
  );
}
