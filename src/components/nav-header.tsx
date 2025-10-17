import Link from "next/link";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { GalleryVerticalEnd } from "lucide-react";
import { siteConfig } from "@/config/site";

export function NavHeader() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" asChild>
          <Link href={"/"}>
            <div className="bg-sidebar-primary flex aspect-square size-8 items-center justify-center rounded-lg text-white">
              <GalleryVerticalEnd className="size-4" />
            </div>
            <div className="flex flex-col gap-0.5 leading-none">
              <span className="font-medium">{siteConfig.name}</span>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
