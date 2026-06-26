import { PipelineBoard } from "@/components/kanban/pipeline-board";
import { mockDeals } from "@/lib/mock/deals";

export default function PipelinePage() {
  return <PipelineBoard deals={mockDeals} />;
}
