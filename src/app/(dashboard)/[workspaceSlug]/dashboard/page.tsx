import { MetricCards } from "@/components/dashboard/metric-cards";
import { SalesFunnelChart } from "@/components/dashboard/sales-funnel-chart";
import { UpcomingDeals } from "@/components/dashboard/upcoming-deals";
import { mockDashboardMetrics, mockFunnelData, mockUpcomingDeals } from "@/lib/mock/metrics";

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <MetricCards metrics={mockDashboardMetrics} />
      <div className="grid gap-4 lg:grid-cols-2">
        <SalesFunnelChart data={mockFunnelData} />
        <UpcomingDeals deals={mockUpcomingDeals} />
      </div>
    </div>
  );
}
