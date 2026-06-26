import { Building2, Calendar, Mail, Phone, User } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LeadFormDialog } from "@/components/leads/lead-form-dialog";
import { LeadStatusBadge } from "@/components/leads/lead-status-badge";
import { Button } from "@/components/ui/button";
import type { Lead } from "@/types/lead";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function LeadProfile({ lead }: { lead: Lead }) {
  return (
    <Card>
      <CardHeader className="flex items-start justify-between gap-2">
        <div>
          <CardTitle className="text-base font-semibold">{lead.name}</CardTitle>
          <p className="text-muted-foreground text-sm">{lead.role}</p>
        </div>
        <LeadFormDialog
          lead={lead}
          trigger={
            <Button variant="outline" size="sm">
              Editar
            </Button>
          }
        />
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <div>
          <LeadStatusBadge status={lead.status} />
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="text-muted-foreground size-4" />
          {lead.company}
        </div>
        <div className="flex items-center gap-2">
          <Mail className="text-muted-foreground size-4" />
          {lead.email}
        </div>
        <div className="flex items-center gap-2">
          <Phone className="text-muted-foreground size-4" />
          {lead.phone}
        </div>
        <div className="flex items-center gap-2">
          <User className="text-muted-foreground size-4" />
          Responsável: {lead.ownerName}
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="text-muted-foreground size-4" />
          Criado em {formatDate(lead.createdAt)}
        </div>
      </CardContent>
    </Card>
  );
}
