"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { ActivityFormDialog } from "@/components/leads/activity-form-dialog";
import { LeadTimeline } from "@/components/leads/lead-timeline";
import { Button } from "@/components/ui/button";
import type { Activity } from "@/types/activity";

export function LeadActivityPanel({
  leadId,
  initialActivities,
}: {
  leadId: string;
  initialActivities: Activity[];
}) {
  const [activities, setActivities] = useState(initialActivities);

  return (
    <div className="space-y-3">
      <div className="flex justify-end">
        <ActivityFormDialog
          trigger={
            <Button size="sm">
              <Plus className="size-4" />
              Nova atividade
            </Button>
          }
          onCreate={(activity) =>
            setActivities((prev) => [...prev, { ...activity, leadId }])
          }
        />
      </div>
      <LeadTimeline activities={activities} />
    </div>
  );
}
