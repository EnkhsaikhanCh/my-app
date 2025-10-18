"use client";

import { TodoForm, TodoList } from "@/components/client/todo";
import { PageHeading } from "@/components/page-heading";
import { useTodo } from "@/hooks/useTodo";

export default function TodoPage() {
  const { todos, isLoading, create, toggle, remove } = useTodo();

  return (
    <div className="mx-auto w-full max-w-full space-y-10 px-10 pb-10 md:max-w-5xl">
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
          todos={todos.map((todo) => ({
            ...todo,
            createdAt: new Date(todo.createdAt),
            updatedAt: new Date(todo.updatedAt),
          }))}
          onToggle={(id, completed) => toggle.mutate({ id, completed })}
          onDelete={(id) => remove.mutate({ id })}
          isDeleting={remove.isPending}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
