"use client";

import { AlertTriangleIcon, CircleDashedIcon } from "lucide-react";

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Spinner } from "@/components/ui/spinner";
import type { Todo } from "@/db/schema";

import { TodoItem } from "./todo-item";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
  isDeleting: boolean;
  isLoading?: boolean;
}

const EmptyState = ({
  title,
  description = "Something went wrong. Please try again.",
  icon = <AlertTriangleIcon />,
}: {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}) => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">{icon}</EmptyMedia>
      <EmptyTitle>{title}</EmptyTitle>
      <EmptyDescription>
        {description || "Something went wrong. Please try again."}
      </EmptyDescription>
    </EmptyHeader>
  </Empty>
);

export function TodoList({
  todos,
  onToggle,
  onDelete,
  isDeleting,
  isLoading = false,
}: TodoListProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center py-4">
        <Spinner />
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <EmptyState
        icon={<CircleDashedIcon />}
        title="No todos found"
        description="You haven't created any tasks yet. Get started by creating your first task."
      />
    );
  }

  return (
    <>
      <div className="space-y-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            isDeleting={isDeleting}
          />
        ))}
      </div>
      <div className="text-muted-foreground mt-5 text-center text-sm">
        {todos.filter((t) => !t.completed).length} of {todos.length} todos
        remaining
      </div>
    </>
  );
}
