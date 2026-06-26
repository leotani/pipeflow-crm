import { LeadList } from "@/components/leads/lead-list";
import { mockLeads } from "@/lib/mock/leads";

export default async function LeadsPage({
  params,
}: {
  params: Promise<{ workspaceSlug: string }>;
}) {
  const { workspaceSlug } = await params;

  return <LeadList leads={mockLeads} workspaceSlug={workspaceSlug} />;
}
