import { cookies } from "next/headers";
import { SIDEBAR_CONSTANTS } from "@/constants/ui";

export async function getSidebarDefaultState(): Promise<boolean> {
  const cookieStore = await cookies();
  const sidebarState = cookieStore.get(SIDEBAR_CONSTANTS.COOKIE_NAME)?.value;
  return sidebarState === SIDEBAR_CONSTANTS.COOKIE_VALUE_OPEN;
}
