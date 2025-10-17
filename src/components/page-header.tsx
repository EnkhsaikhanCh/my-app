import { ModeToggle } from "@/components/mode-toggle";

interface PageHeaderProps {
  children: React.ReactNode;
}

export function PageHeader({ children }: PageHeaderProps) {
  return (
    <header className="container mx-auto flex items-center justify-between p-4">
      {children}
    </header>
  );
}

interface HeaderNavigationProps {
  children: React.ReactNode;
}

export function HeaderNavigation({ children }: HeaderNavigationProps) {
  return (
    <nav className="flex items-center gap-2" role="navigation">
      {children}
      <ModeToggle />
    </nav>
  );
}
