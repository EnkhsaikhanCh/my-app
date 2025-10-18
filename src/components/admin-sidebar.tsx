"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  BarChart3Icon,
  ChevronUpIcon,
  CircleUserRoundIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  SettingsIcon,
  User2Icon,
  UsersIcon,
} from "lucide-react";

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

const ADMIN_NAV_ITEMS = [
  {
    title: "Overview",
    url: "/admin",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: UsersIcon,
  },
  {
    title: "Analytics",
    url: "/admin/analytics",
    icon: BarChart3Icon,
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: SettingsIcon,
  },
] as const;

interface AdminSidebarNavigationProps {
  items: typeof ADMIN_NAV_ITEMS;
}

function AdminSidebarNavigation({ items }: AdminSidebarNavigationProps) {
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

interface AdminUserMenuProps {
  username?: string;
}

function AdminUserMenu({ username = "Admin User" }: AdminUserMenuProps) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton>
              <User2Icon aria-hidden="true" />
              <span>{username}</span>
              <ChevronUpIcon className="ml-auto" aria-hidden="true" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="top"
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
          >
            <DropdownMenuItem asChild className="flex justify-between">
              <Link href="/dashboard">
                <span>Back to Dashboard</span>
                <LayoutDashboardIcon className="h-4 w-4" />
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex justify-between">
              <span>Sign out</span>
              <LogOutIcon className="h-4 w-4" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export function AdminSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <NavHeader isAdmin />
      </SidebarHeader>
      <SidebarContent>
        <AdminSidebarNavigation items={ADMIN_NAV_ITEMS} />

        {/* User */}
        <SidebarGroup>
          <SidebarGroupLabel>User</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard">
                    <CircleUserRoundIcon />
                    <span>User Panel</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <AdminUserMenu />
      </SidebarFooter>
    </Sidebar>
  );
}
