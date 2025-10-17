import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <header className="flex items-center justify-between py-4">
        <h1>{siteConfig.name}</h1>
        <div className="flex items-center gap-2">
          <Button variant={"outline"}>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <ModeToggle />
        </div>
      </header>
    </main>
  );
}
