import { ModeToggle } from "@/components/mode-toggle";

interface PageHeaderProps {
  children: React.ReactNode;
}

export function PageHeader({ children }: PageHeaderProps) {
  return (
    <header className="flex items-center justify-between border-b p-4">
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
