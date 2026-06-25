import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PIPELINE_STAGE_LABELS } from "@/types/deal";
import type { Deal } from "@/types/deal";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatDueDate(dueDate: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
  }).format(new Date(dueDate));
}

export function UpcomingDeals({ deals }: { deals: Deal[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">Negócios com prazo próximo</CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        {deals.length === 0 && (
          <p className="text-muted-foreground text-sm">Nenhum negócio com prazo agendado.</p>
        )}
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="flex items-center justify-between gap-3 rounded-md px-2 py-2.5 text-sm hover:bg-muted/50"
          >
            <div className="min-w-0">
              <p className="truncate font-medium">{deal.title}</p>
              <p className="text-muted-foreground truncate text-xs">
                {deal.leadName} · {deal.ownerName}
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-1">
              <span className="text-xs font-medium">{formatDueDate(deal.dueDate)}</span>
              <Badge variant="outline" className="text-[0.65rem]">
                {PIPELINE_STAGE_LABELS[deal.stage]}
              </Badge>
            </div>
            <span className="w-24 shrink-0 text-right text-sm font-medium">
              {formatCurrency(deal.value)}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
