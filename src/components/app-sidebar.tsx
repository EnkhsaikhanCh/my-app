import Link from "next/link";

import { ChevronUpIcon, LogOutIcon, User2Icon } from "lucide-react";

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

interface SidebarNavigationProps {
  items: typeof MAIN_NAVIGATION_ITEMS;
}

function SidebarNavigation({ items }: SidebarNavigationProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Main</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map(({ title, url, icon: Icon }) => (
            <SidebarMenuItem key={title}>
              <SidebarMenuButton asChild>
                <Link href={url}>
                  <Icon />
                  <span>{title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

interface UserMenuProps {
  username?: string;
}

function UserMenu({ username = "Username" }: UserMenuProps) {
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
            <DropdownMenuItem className="flex justify-between">
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
      </SidebarContent>
      <SidebarFooter>
        <UserMenu />
      </SidebarFooter>
    </Sidebar>
  );
}
