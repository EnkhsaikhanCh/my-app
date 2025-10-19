import { ClientButton } from "@/components/client/client-button";
import { UserInformation } from "@/components/client/user-information";
import { PageHeading } from "@/components/page-heading";

export default function DashboardPage() {
  return (
    <div>
      <PageHeading title="Home" description="Welcome to your dashboard!" />

      <ClientButton />

      {/* Personal Information */}
      <UserInformation />
    </div>
  );
}
