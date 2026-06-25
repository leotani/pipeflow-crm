import { Badge } from "@/components/ui/badge";
import { PIPELINE_STAGE_LABELS } from "@/types/deal";
import type { PipelineStage } from "@/types/deal";

const STATUS_VARIANT: Record<PipelineStage, "outline" | "secondary" | "default" | "destructive"> = {
  novo_lead: "outline",
  contato_realizado: "outline",
  proposta_enviada: "secondary",
  negociacao: "secondary",
  fechado_ganho: "default",
  fechado_perdido: "destructive",
};

export function LeadStatusBadge({ status }: { status: PipelineStage }) {
  return <Badge variant={STATUS_VARIANT[status]}>{PIPELINE_STAGE_LABELS[status]}</Badge>;
}
