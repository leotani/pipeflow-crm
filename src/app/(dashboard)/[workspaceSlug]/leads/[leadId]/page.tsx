import { notFound } from "next/navigation";

import { LeadProfile } from "@/components/leads/lead-profile";
import { LeadTimeline } from "@/components/leads/lead-timeline";
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
        <LeadTimeline activities={activities} />
      </div>
    </div>
  );
}
