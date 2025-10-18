import { ClientButton } from "@/components/client-button";
import { PageHeading } from "@/components/page-heading";

export default function DashboardPage() {
  return (
    <div>
      <PageHeading title="Home" description="Welcome to your dashboard!" />

      <ClientButton />
    </div>
  );
}
