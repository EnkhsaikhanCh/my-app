import Link from "next/link";

import { ArrowLeftFromLine } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";

const NOT_FOUND_MESSAGES = {
  TITLE: "404 - Not Found",
  DESCRIPTION: "The page you are looking for does not exist.",
  BUTTON_TEXT: "Go back home",
} as const;

export default function NotFoundPage() {
  return (
    <Empty className="h-screen">
      <EmptyHeader>
        <EmptyTitle>{NOT_FOUND_MESSAGES.TITLE}</EmptyTitle>
        <EmptyDescription>{NOT_FOUND_MESSAGES.DESCRIPTION}</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" asChild>
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeftFromLine aria-hidden="true" />
            <span>{NOT_FOUND_MESSAGES.BUTTON_TEXT}</span>
          </Link>
        </Button>
      </EmptyContent>
    </Empty>
  );
}
