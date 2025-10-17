import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import { ArrowLeftFromLine } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <Empty className="h-screen">
      <EmptyHeader>
        <EmptyTitle>404 - Not Found</EmptyTitle>
        <EmptyDescription>
          The page you are looking for does not exist.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <EmptyDescription>
          <Button variant={"outline"}>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeftFromLine />
              Go back home
            </Link>
          </Button>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  );
}
