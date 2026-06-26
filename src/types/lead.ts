import type { PipelineStage } from "@/types/deal";

export type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  status: PipelineStage;
  ownerName: string;
  createdAt: string;
};
