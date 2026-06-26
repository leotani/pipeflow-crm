"use client";

import { useMemo, useState } from "react";

import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";

import { DealFormDialog } from "@/components/kanban/deal-form-dialog";
import { PipelineColumn } from "@/components/kanban/pipeline-column";
import { Button } from "@/components/ui/button";
import { PIPELINE_STAGES } from "@/types/deal";
import type { Deal, PipelineStage } from "@/types/deal";

function isPipelineStage(value: string): value is PipelineStage {
  return (PIPELINE_STAGES as readonly string[]).includes(value);
}

export function PipelineBoard({ deals: initialDeals }: { deals: Deal[] }) {
  const [deals, setDeals] = useState(initialDeals);
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
  );

  const leadOptions = useMemo(
    () => Array.from(new Set(deals.map((deal) => deal.leadName))).sort(),
    [deals],
  );
  const ownerOptions = useMemo(
    () => Array.from(new Set(deals.map((deal) => deal.ownerName))).sort(),
    [deals],
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;

    const targetStage = over.id.toString();
    if (!isPipelineStage(targetStage)) return;

    setDeals((current) =>
      current.map((deal) =>
        deal.id === active.id ? { ...deal, stage: targetStage } : deal,
      ),
    );
  }

  function handleCreate(values: Omit<Deal, "id">) {
    setDeals((current) => [...current, { ...values, id: `d${Date.now()}` }]);
  }

  function handleUpdate(dealId: string, values: Omit<Deal, "id">) {
    setDeals((current) =>
      current.map((deal) => (deal.id === dealId ? { ...values, id: dealId } : deal)),
    );
    setSelectedDeal(null);
  }

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Pipeline</h1>
          <p className="text-muted-foreground text-sm">
            Arraste os cards entre as etapas para atualizar o andamento.
          </p>
        </div>
        <DealFormDialog
          leadOptions={leadOptions}
          ownerOptions={ownerOptions}
          trigger={<Button>Novo negócio</Button>}
          onSubmit={handleCreate}
        />
      </div>

      <DndContext id="pipeline-board" sensors={sensors} onDragEnd={handleDragEnd}>
        <div className="flex flex-1 gap-3 overflow-x-auto pb-2">
          {PIPELINE_STAGES.map((stage) => (
            <PipelineColumn
              key={stage}
              stage={stage}
              deals={deals.filter((deal) => deal.stage === stage)}
              onDealClick={setSelectedDeal}
            />
          ))}
        </div>
      </DndContext>

      {selectedDeal && (
        <DealFormDialog
          deal={selectedDeal}
          leadOptions={leadOptions}
          ownerOptions={ownerOptions}
          open={selectedDeal !== null}
          onOpenChange={(open) => {
            if (!open) setSelectedDeal(null);
          }}
          onSubmit={(values) => handleUpdate(selectedDeal.id, values)}
        />
      )}
    </div>
  );
}
