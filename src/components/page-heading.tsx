interface PageHeadingProps {
  title: string;
  description?: string;
}

export function PageHeading({ title, description }: PageHeadingProps) {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  );
}
