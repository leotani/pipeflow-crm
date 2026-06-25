import Link from "next/link";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Free",
    price: "R$0",
    period: "/mês",
    description: "Para quem está começando a organizar o processo de vendas.",
    features: ["Até 2 colaboradores", "Até 50 leads", "Pipeline Kanban completo", "Timeline de atividades"],
    cta: "Começar gratuitamente",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "R$49",
    period: "/mês",
    description: "Para times que precisam crescer sem limites.",
    features: [
      "Colaboradores ilimitados",
      "Leads ilimitados",
      "Pipeline Kanban completo",
      "Timeline de atividades",
      "Suporte prioritário",
    ],
    cta: "Assinar Pro",
    highlighted: true,
  },
];

export function PricingSection() {
  return (
    <section id="precos" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Planos para todo tamanho de time
        </h2>
        <p className="mt-3 text-muted-foreground">
          Comece de graça e faça upgrade quando precisar de mais colaboradores e leads.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
        {PLANS.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              plan.highlighted && "ring-2 ring-primary",
            )}
          >
            <CardHeader>
              <CardTitle className="text-lg">{plan.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-heading text-3xl font-semibold">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2.5 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="size-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="border-t-0 bg-transparent">
              <Button
                className="w-full"
                variant={plan.highlighted ? "default" : "outline"}
                asChild
              >
                <Link href="/signup">{plan.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
