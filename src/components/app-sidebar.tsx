import { ChevronUp, User2 } from "lucide-react";
import Link from "next/link";

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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavHeader } from "@/components/nav-header";
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
              <User2 aria-hidden="true" />
              <span>{username}</span>
              <ChevronUp className="ml-auto" aria-hidden="true" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="top"
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
          >
            <DropdownMenuItem>
              <span>Sign out</span>
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
