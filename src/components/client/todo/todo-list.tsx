"use client";

import { Skeleton } from "@/components/ui/skeleton";
import type { Todo } from "@/db/schema";

import { TodoItem } from "./todo-item";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
  isDeleting: boolean;
  isLoading?: boolean;
}

function TodoSkeleton() {
  return (
    <div className="bg-card border-border flex items-center gap-3 rounded-lg border p-4">
      <Skeleton className="h-5 w-5 rounded" />
      <Skeleton className="h-5 flex-1" />
      <Skeleton className="h-8 w-8" />
    </div>
  );
}

export function TodoList({
  todos,
  onToggle,
  onDelete,
  isDeleting,
  isLoading = false,
}: TodoListProps) {
  if (isLoading) {
    return (
      <div className="space-y-2">
        <TodoSkeleton />
        <TodoSkeleton />
        <TodoSkeleton />
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <p className="text-muted-foreground py-8 text-center">
        No todos yet. Add one above to get started!
      </p>
    );
  }

  return (
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
      <div className="text-muted-foreground text-sm">
        {todos.filter((t) => !t.completed).length} of {todos.length} todos
        remaining
      </div>
    </div>
  );
}
