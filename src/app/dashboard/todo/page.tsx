"use client";

import { useState } from "react";

import { Trash2 } from "lucide-react";

import { PageHeading } from "@/components/page-heading";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import type { Todo } from "@/db/schema";
import { trpc } from "@/lib/trpc";

export default function TodoPage() {
  const [title, setTitle] = useState("");

  const utils = trpc.useUtils();
  const { data: todos = [] } = trpc.todo.getAll.useQuery() as { data: Todo[] };

  const createTodo = trpc.todo.create.useMutation({
    onSuccess: () => {
      setTitle("");
      utils.todo.getAll.invalidate();
    },
  });

  const toggleTodo = trpc.todo.toggle.useMutation({
    onSuccess: () => {
      utils.todo.getAll.invalidate();
    },
  });

  const deleteTodo = trpc.todo.delete.useMutation({
    onSuccess: () => {
      utils.todo.getAll.invalidate();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      createTodo.mutate({ title: title.trim() });
    }
  };

  return (
    <div>
      <PageHeading
        title="Todo"
        description="Manage your tasks and to-dos here."
      />

      {/* Todo list and management components will go here */}
      <div className="mt-4 space-y-8">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="text"
            placeholder="Add a new todo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1"
          />
          <Button
            type="submit"
            disabled={createTodo.isPending || !title.trim()}
          >
            {createTodo.isPending ? "Adding..." : "Add"}
          </Button>
        </form>

        <div className="space-y-2">
          {todos.length === 0 ? (
            <p className="text-muted-foreground py-8 text-center">
              No todos yet. Add one above to get started!
            </p>
          ) : (
            todos.map((todo) => (
              <div
                key={todo.id}
                className="bg-card border-border hover:bg-accent/50 flex items-center gap-3 rounded-lg border p-4 transition-colors"
              >
                <Checkbox
                  checked={todo.completed}
                  onCheckedChange={(checked) =>
                    toggleTodo.mutate({
                      id: todo.id,
                      completed: checked === true,
                    })
                  }
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
                  onClick={() => deleteTodo.mutate({ id: todo.id })}
                  disabled={deleteTodo.isPending}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))
          )}
        </div>

        {todos.length > 0 && (
          <div className="text-muted-foreground text-sm">
            {todos.filter((t) => !t.completed).length} of {todos.length} todos
            remaining
          </div>
        )}
      </div>
    </div>
  );
}
