"use client";

import type { Todo } from "@/db/schema";

import { TodoItem } from "./todo-item";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
  isDeleting: boolean;
}

export function TodoList({
  todos,
  onToggle,
  onDelete,
  isDeleting,
}: TodoListProps) {
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
