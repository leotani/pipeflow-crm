import { Mail, MessageSquare, Phone, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ACTIVITY_TYPE_LABELS } from "@/types/activity";
import type { Activity, ActivityType } from "@/types/activity";

const ACTIVITY_ICONS: Record<ActivityType, typeof Phone> = {
  ligacao: Phone,
  email: Mail,
  reuniao: Users,
  nota: MessageSquare,
};

function formatDateTime(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

export function LeadTimeline({ activities }: { activities: Activity[] }) {
  const sorted = [...activities].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">Atividades</CardTitle>
      </CardHeader>
      <CardContent>
        {sorted.length === 0 && (
          <p className="text-muted-foreground text-sm">Nenhuma atividade registrada.</p>
        )}
        <ol className="space-y-4">
          {sorted.map((activity) => {
            const Icon = ACTIVITY_ICONS[activity.type];

            return (
              <li key={activity.id} className="flex gap-3">
                <span className="bg-muted flex size-8 shrink-0 items-center justify-center rounded-full">
                  <Icon className="size-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-medium">{ACTIVITY_TYPE_LABELS[activity.type]}</p>
                    <span className="text-muted-foreground shrink-0 text-xs">
                      {formatDateTime(activity.createdAt)}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{activity.note}</p>
                  <p className="text-muted-foreground text-xs">{activity.authorName}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </CardContent>
    </Card>
  );
}
