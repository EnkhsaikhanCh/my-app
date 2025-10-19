"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { ChevronUpIcon, LogOutIcon, ShieldIcon, User2Icon } from "lucide-react";

import { NavHeader } from "@/components/nav-header";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { MAIN_NAVIGATION_ITEMS } from "@/constants/navigation";
import { authClient } from "@/lib/auth-client";
import { queryClient } from "@/lib/trpc";

interface SidebarNavigationProps {
  items: typeof MAIN_NAVIGATION_ITEMS;
}

function SidebarNavigation({ items }: SidebarNavigationProps) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Main</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map(({ title, url, icon: Icon }) => {
            const isActive = pathname === url;
            return (
              <SidebarMenuItem key={title}>
                <SidebarMenuButton asChild isActive={isActive}>
                  <Link href={url}>
                    <Icon />
                    <span>{title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

function UserMenu() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton>
              <User2Icon aria-hidden="true" />
              <span>
                {isPending ? "Loading..." : session && session.user.email}
              </span>
              <ChevronUpIcon className="ml-auto" aria-hidden="true" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="top"
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
          >
            <DropdownMenuItem
              className="flex justify-between"
              onClick={async () => {
                await authClient.signOut(); // Delete server session
                queryClient.clear(); // Clear all trpc / react-query cache
                router.push("/"); // Redirect
              }}
            >
              <span>Sign out</span>
              <LogOutIcon />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      <SidebarContent>
        <SidebarNavigation items={MAIN_NAVIGATION_ITEMS} />

        {/* Admin Access */}
        <SidebarGroup>
          <SidebarGroupLabel>Administration</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/admin">
                    <ShieldIcon />
                    <span>Admin Panel</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <UserMenu />
      </SidebarFooter>
    </Sidebar>
  );
}
