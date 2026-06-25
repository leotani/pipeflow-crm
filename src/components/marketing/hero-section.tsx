import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 sm:py-28">
      <Badge variant="secondary">Pipeline de vendas sem planilhas</Badge>

      <h1 className="max-w-3xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
        Organize seus leads e fechos negócios mais rápido
      </h1>

      <p className="max-w-xl text-lg text-muted-foreground">
        O PipeFlow centraliza leads, pipeline Kanban e atividades do seu time de
        vendas em um só lugar — sem mais planilhas ou anotações soltas.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button size="lg" asChild>
          <Link href="/signup">
            Começar gratuitamente
            <ArrowRight className="size-4" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#funcionalidades">Ver funcionalidades</a>
        </Button>
      </div>
    </section>
  );
}
