"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { authClient } from "@/lib/auth-client";

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <TableRow>
      <TableCell className="text-muted-foreground w-1/6 font-medium whitespace-nowrap">
        {label}
      </TableCell>
      <TableCell className="break-all whitespace-normal">{value}</TableCell>
    </TableRow>
  );
}

export function UserInformation() {
  const { data: session, isPending, error } = authClient.useSession();

  return (
    <>
      {error && (
        <p className="mb-4 text-sm text-red-600">Error: {error.message}</p>
      )}
      <Card className="mt-4 w-full max-w-full md:max-w-xl">
        <CardHeader>
          <CardTitle>Personal details</CardTitle>
          <CardDescription>Details about the current user.</CardDescription>
        </CardHeader>
        {isPending ? (
          <div className="flex min-h-[100px] items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <CardContent>
            <Table>
              <TableBody>
                <InfoRow label="User ID" value={session?.user.id} />
                <InfoRow label="Name" value={session?.user.name} />
                <InfoRow label="Email" value={session?.user.email} />
                <InfoRow label="Role" value={session?.user.role} />
              </TableBody>
            </Table>
          </CardContent>
        )}
      </Card>
    </>
  );
}
