export type WorkspacePlan = "free" | "pro";

export type Workspace = {
  id: string;
  name: string;
  slug: string;
  plan: WorkspacePlan;
};
