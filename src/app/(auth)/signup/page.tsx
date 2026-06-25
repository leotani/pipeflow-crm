import Link from "next/link";
import type { Metadata } from "next";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignupForm } from "@/components/auth/signup-form";

export const metadata: Metadata = {
  title: "Criar conta | PipeFlow CRM",
};

export default function SignupPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Criar conta gratuita</CardTitle>
        <CardDescription>
          Comece a organizar seu pipeline de vendas em minutos.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignupForm />
      </CardContent>

      <p className="px-(--card-spacing) pb-(--card-spacing) text-center text-sm text-muted-foreground">
        Já tem uma conta?{" "}
        <Link href="/login" className="font-medium text-foreground hover:underline">
          Entrar
        </Link>
      </p>
    </Card>
  );
}
