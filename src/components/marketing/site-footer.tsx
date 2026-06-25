import Link from "next/link";
import { LayoutDashboard } from "lucide-react";

const FOOTER_LINKS = [
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#precos", label: "Preços" },
  { href: "/login", label: "Entrar" },
  { href: "/signup", label: "Cadastrar" },
];

export function MarketingFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-heading text-sm font-semibold">
          <LayoutDashboard className="size-4 text-primary" />
          PipeFlow
        </Link>

        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          {FOOTER_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} PipeFlow. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
