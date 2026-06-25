import { Percent, TrendingUp, Users, Wallet } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { DashboardMetrics } from "@/types/metrics";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatPercent(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "percent",
    maximumFractionDigits: 0,
  }).format(value);
}

export function MetricCards({ metrics }: { metrics: DashboardMetrics }) {
  const items = [
    {
      label: "Total de leads",
      value: metrics.totalLeads.toLocaleString("pt-BR"),
      icon: Users,
    },
    {
      label: "Negócios abertos",
      value: metrics.openDeals.toLocaleString("pt-BR"),
      icon: TrendingUp,
    },
    {
      label: "Valor em pipeline",
      value: formatCurrency(metrics.pipelineValue),
      icon: Wallet,
    },
    {
      label: "Taxa de conversão",
      value: formatPercent(metrics.conversionRate),
      icon: Percent,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ label, value, icon: Icon }) => (
        <Card key={label}>
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">{label}</CardTitle>
            <Icon className="text-muted-foreground size-4" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold tracking-tight">{value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
