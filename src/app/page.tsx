import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="container mx-auto flex items-center justify-between p-4">
        <h1>{siteConfig.name}</h1>
        <nav className="flex items-center gap-2">
          <Button variant={"outline"} asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <ModeToggle />
        </nav>
      </header>
      <main className="container mx-auto p-4">
        {/* Main content goes here */}
      </main>
    </>
  );
}
