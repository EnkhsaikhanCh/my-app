import Link from "next/link";

import { GalleryVerticalEndIcon } from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { siteConfig } from "@/config/site";
import { UI_CONSTANTS } from "@/constants/ui";

interface NavLogoProps {
  name: string;
  isAdmin?: boolean;
}

function NavLogo({ name, isAdmin }: NavLogoProps) {
  return (
    <>
      <div className="bg-sidebar-primary flex aspect-square size-8 items-center justify-center rounded-lg text-white">
        <GalleryVerticalEndIcon
          className={UI_CONSTANTS.ICON_SIZE.SMALL}
          aria-hidden="true"
        />
      </div>
      <div className="flex flex-col gap-0.5 leading-none">
        <span className="font-medium">{name}</span>
        {isAdmin && (
          <span className="text-muted-foreground text-xs">Admin Panel</span>
        )}
      </div>
    </>
  );
}

export function NavHeader({ isAdmin }: { isAdmin?: boolean }) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" asChild>
          <Link href="/" aria-label={`Go to ${siteConfig.name} home page`}>
            <NavLogo name={siteConfig.name} isAdmin={isAdmin} />
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
