"use client";

import { useDraggable } from "@dnd-kit/core";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
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

function userInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function DealCard({ deal, onClick }: { deal: Deal; onClick?: () => void }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: deal.id,
  });

  return (
    <Card
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      onClick={onClick}
      style={
        transform
          ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
          : undefined
      }
      className={cn(
        "cursor-grab touch-none gap-0 py-0 transition-shadow hover:shadow-md active:cursor-grabbing",
        isDragging && "z-10 opacity-50 shadow-lg",
      )}
    >
      <CardContent className="space-y-2 p-3">
        <p className="line-clamp-2 text-sm font-medium">{deal.title}</p>
        <p className="text-muted-foreground truncate text-xs">{deal.leadName}</p>
        <div className="flex items-center justify-between gap-2 pt-1">
          <span className="text-sm font-semibold">{formatCurrency(deal.value)}</span>
          <div className="flex items-center gap-1.5">
            <span className="text-muted-foreground text-xs">{formatDueDate(deal.dueDate)}</span>
            <Avatar size="sm">
              <AvatarFallback className="text-[0.6rem]">
                {userInitials(deal.ownerName)}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
