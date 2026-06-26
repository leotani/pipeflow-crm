"use client";

import { useDroppable } from "@dnd-kit/core";

import { DealCard } from "@/components/kanban/deal-card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { PIPELINE_STAGE_LABELS } from "@/types/deal";
import type { Deal, PipelineStage } from "@/types/deal";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}

export function PipelineColumn({
  stage,
  deals,
  onDealClick,
}: {
  stage: PipelineStage;
  deals: Deal[];
  onDealClick: (deal: Deal) => void;
}) {
  const { setNodeRef, isOver } = useDroppable({ id: stage });
  const totalValue = deals.reduce((sum, deal) => sum + deal.value, 0);

  return (
    <div className="flex w-72 shrink-0 flex-col rounded-lg bg-muted/40">
      <div className="flex items-center justify-between gap-2 px-3 py-2.5">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-medium">{PIPELINE_STAGE_LABELS[stage]}</h3>
          <Badge variant="outline" className="text-[0.65rem]">
            {deals.length}
          </Badge>
        </div>
        <span className="text-muted-foreground text-xs">{formatCurrency(totalValue)}</span>
      </div>
      <div
        ref={setNodeRef}
        className={cn(
          "flex min-h-24 flex-1 flex-col gap-2 px-2 pb-3",
          isOver && "bg-primary/5 rounded-md",
        )}
      >
        {deals.map((deal) => (
          <DealCard key={deal.id} deal={deal} onClick={() => onDealClick(deal)} />
        ))}
        {deals.length === 0 && (
          <p className="text-muted-foreground px-2 py-4 text-center text-xs">
            Nenhum negócio nesta etapa.
          </p>
        )}
      </div>
    </div>
  );
}
