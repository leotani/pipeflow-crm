import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPreviewPage() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {["Leads", "Negócios abertos", "Valor em pipeline", "Taxa de conversão"].map(
        (label) => (
          <Card key={label}>
            <CardHeader>
              <CardTitle className="text-sm font-medium">{label}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-xs">
              Conteúdo real chega no Milestone 4.
            </CardContent>
          </Card>
        ),
      )}
    </div>
  );
}
