"use client";

import { Check, ChevronsUpDown, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { mockWorkspaces } from "@/lib/mock/workspaces";
import { cn } from "@/lib/utils";
import type { Workspace } from "@/types/workspace";

function workspaceInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function WorkspaceSwitcher({ current }: { current: Workspace }) {
  const router = useRouter();

  function handleSelect(workspace: Workspace) {
    if (workspace.id === current.id) return;
    router.push(`/${workspace.slug}/dashboard`);
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size="lg" className="gap-2">
              <div className="bg-primary text-primary-foreground flex size-7 shrink-0 items-center justify-center rounded-md text-xs font-semibold">
                {workspaceInitials(current.name)}
              </div>
              <div className="flex min-w-0 flex-col text-left">
                <span className="truncate text-sm font-medium">{current.name}</span>
                <span className="text-muted-foreground truncate text-xs capitalize">
                  Plano {current.plan === "pro" ? "Pro" : "Free"}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4 shrink-0" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-64">
            <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {mockWorkspaces.map((workspace) => (
              <DropdownMenuItem
                key={workspace.id}
                onSelect={() => handleSelect(workspace)}
                className="gap-2"
              >
                <div className="bg-secondary text-secondary-foreground flex size-6 shrink-0 items-center justify-center rounded-md text-[0.65rem] font-semibold">
                  {workspaceInitials(workspace.name)}
                </div>
                <span className="flex-1 truncate">{workspace.name}</span>
                <Check
                  className={cn(
                    "size-4",
                    workspace.id === current.id ? "opacity-100" : "opacity-0",
                  )}
                />
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2">
              <Plus className="size-4" />
              Novo workspace
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
