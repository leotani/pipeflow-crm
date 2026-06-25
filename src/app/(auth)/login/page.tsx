import Link from "next/link";
import type { Metadata } from "next";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Entrar | PipeFlow CRM",
};

export default function LoginPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Entrar na sua conta</CardTitle>
        <CardDescription>
          Acesse seu workspace e continue de onde parou.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>

      <p className="px-(--card-spacing) pb-(--card-spacing) text-center text-sm text-muted-foreground">
        Ainda não tem uma conta?{" "}
        <Link href="/signup" className="font-medium text-foreground hover:underline">
          Criar conta gratuita
        </Link>
      </p>
    </Card>
  );
}
