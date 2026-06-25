import { CalendarClock, KanbanSquare, Users, Users2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FEATURES = [
  {
    icon: KanbanSquare,
    title: "Pipeline Kanban",
    description:
      "Visualize todos os seus negócios por etapa e arraste cards entre colunas conforme o funil avança.",
  },
  {
    icon: Users,
    title: "Gestão de leads",
    description:
      "Cadastre, busque e filtre leads por status, responsável e data em um só lugar.",
  },
  {
    icon: CalendarClock,
    title: "Timeline de atividades",
    description:
      "Registre ligações, e-mails, reuniões e notas com histórico completo por lead.",
  },
  {
    icon: Users2,
    title: "Multi-workspace",
    description:
      "Convide colaboradores e gerencie múltiplas empresas ou clientes a partir de uma única conta.",
  },
];

export function FeaturesSection() {
  return (
    <section id="funcionalidades" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Tudo que seu time de vendas precisa
        </h2>
        <p className="mt-3 text-muted-foreground">
          Recursos essenciais para organizar o processo comercial, sem complexidade desnecessária.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="size-6 text-primary" />
              <CardTitle className="mt-2">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
