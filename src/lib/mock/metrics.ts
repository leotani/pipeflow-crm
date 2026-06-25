import { mockDeals } from "@/lib/mock/deals";
import { PIPELINE_STAGES } from "@/types/deal";
import type { DashboardMetrics, FunnelStagePoint } from "@/types/metrics";

const OPEN_STAGES = new Set([
  "novo_lead",
  "contato_realizado",
  "proposta_enviada",
  "negociacao",
]);

const openDeals = mockDeals.filter((deal) => OPEN_STAGES.has(deal.stage));
const wonDeals = mockDeals.filter((deal) => deal.stage === "fechado_ganho");
const lostDeals = mockDeals.filter((deal) => deal.stage === "fechado_perdido");
const closedCount = wonDeals.length + lostDeals.length;

export const mockDashboardMetrics: DashboardMetrics = {
  totalLeads: 42,
  openDeals: openDeals.length,
  pipelineValue: openDeals.reduce((sum, deal) => sum + deal.value, 0),
  conversionRate: closedCount === 0 ? 0 : wonDeals.length / closedCount,
};

export const mockFunnelData: FunnelStagePoint[] = PIPELINE_STAGES.map((stage) => ({
  stage,
  count: mockDeals.filter((deal) => deal.stage === stage).length,
}));

export const mockUpcomingDeals = [...openDeals].sort(
  (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime(),
);
