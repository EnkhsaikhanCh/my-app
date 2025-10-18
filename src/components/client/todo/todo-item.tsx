"use client";

import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { Todo } from "@/db/schema";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
  isDeleting: boolean;
}

export function TodoItem({
  todo,
  onToggle,
  onDelete,
  isDeleting,
}: TodoItemProps) {
  return (
    <div className="bg-card border-border hover:bg-accent/50 flex items-center gap-3 rounded-lg border p-4 transition-colors">
      <Checkbox
        checked={todo.completed}
        onCheckedChange={(checked) => onToggle(todo.id, checked === true)}
      />
      <span
        className={`flex-1 ${
          todo.completed ? "text-muted-foreground line-through" : ""
        }`}
      >
        {todo.title}
      </span>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(todo.id)}
        disabled={isDeleting}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
