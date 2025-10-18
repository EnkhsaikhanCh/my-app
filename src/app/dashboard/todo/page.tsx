"use client";

import { TodoForm, TodoList } from "@/components/client/todo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTodo } from "@/hooks/useTodo";

export default function TodoPage() {
  const { todos, isLoading, create, toggle, remove } = useTodo();

  return (
    <div className="mx-auto w-full max-w-full space-y-10 px-10 pb-10 md:max-w-5xl">
      <Card className="mx-auto w-full max-w-full md:max-w-2xl">
        <CardHeader>
          <CardTitle>Todo List</CardTitle>
          <CardDescription>Manage your tasks efficiently</CardDescription>
        </CardHeader>

        <CardContent>
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
        </CardContent>
      </Card>
    </div>
  );
}
