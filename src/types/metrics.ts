import type { PipelineStage } from "@/types/deal";

export type DashboardMetrics = {
  totalLeads: number;
  openDeals: number;
  pipelineValue: number;
  conversionRate: number;
};

export type FunnelStagePoint = {
  stage: PipelineStage;
  count: number;
};
