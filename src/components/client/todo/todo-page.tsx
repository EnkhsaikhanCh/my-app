"use client";

import { PageHeading } from "@/components/page-heading";
import { useTodo } from "@/hooks/useTodo";

import { TodoForm } from "./todo-form";
import { TodoList } from "./todo-list";

export default function TodoPage() {
  const { todos, create, toggle, remove } = useTodo();

  return (
    <div>
      <PageHeading
        title="Todo"
        description="Manage your tasks and to-dos here."
      />

      <div className="mt-4 space-y-8">
        <TodoForm
          onAdd={(title) => create.mutate({ title })}
          isPending={create.isPending}
        />

        <TodoList
          todos={todos}
          onToggle={(id, completed) => toggle.mutate({ id, completed })}
          onDelete={(id) => remove.mutate({ id })}
          isDeleting={remove.isPending}
        />
      </div>
    </div>
  );
}
