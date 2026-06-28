import { notFound } from "next/navigation";

import { LeadActivityPanel } from "@/components/leads/lead-activity-panel";
import { LeadProfile } from "@/components/leads/lead-profile";
import { mockActivities } from "@/lib/mock/activities";
import { mockLeads } from "@/lib/mock/leads";

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ workspaceSlug: string; leadId: string }>;
}) {
  const { leadId } = await params;
  const lead = mockLeads.find((item) => item.id === leadId);

  if (!lead) {
    notFound();
  }

  const activities = mockActivities.filter((activity) => activity.leadId === lead.id);

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <div className="lg:col-span-1">
        <LeadProfile lead={lead} />
      </div>
      <div className="lg:col-span-2">
        <LeadActivityPanel leadId={lead.id} initialActivities={activities} />
      </div>
    </div>
  );
}
