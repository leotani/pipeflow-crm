import type { Workspace } from "@/types/workspace";

export const mockWorkspaces: Workspace[] = [
  { id: "1", name: "Acme Inc.", slug: "acme", plan: "pro" },
  { id: "2", name: "Startup XYZ", slug: "startup-xyz", plan: "free" },
  { id: "3", name: "Soluções Beta", slug: "solucoes-beta", plan: "free" },
];

export const mockCurrentUser = {
  name: "Leo Tani",
  email: "leotaniguchi@gmail.com",
};
