import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <header className="flex items-center justify-between py-4">
        <h1>Welcome to My Website</h1>
        <ModeToggle />
      </header>
    </main>
  );
}
