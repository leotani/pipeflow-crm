import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="flex flex-col items-center gap-6 rounded-2xl bg-secondary px-6 py-14 text-center sm:px-12">
        <h2 className="max-w-xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Pronto para organizar seu pipeline de vendas?
        </h2>
        <p className="max-w-md text-muted-foreground">
          Crie seu workspace gratuito em poucos minutos. Sem cartão de crédito.
        </p>
        <Button size="lg" asChild>
          <Link href="/signup">
            Começar gratuitamente
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
