export const ACTIVITY_TYPES = ["ligacao", "email", "reuniao", "nota"] as const;

export type ActivityType = (typeof ACTIVITY_TYPES)[number];

export const ACTIVITY_TYPE_LABELS: Record<ActivityType, string> = {
  ligacao: "Ligação",
  email: "E-mail",
  reuniao: "Reunião",
  nota: "Nota",
};

export type Activity = {
  id: string;
  leadId: string;
  type: ActivityType;
  note: string;
  authorName: string;
  createdAt: string;
};
