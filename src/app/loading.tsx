import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="text-muted-foreground flex h-screen items-center justify-center">
      <Spinner />
    </div>
  );
}
