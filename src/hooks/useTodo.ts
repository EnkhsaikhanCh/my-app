"use client";

import type { Todo } from "@/db/schema";
import { trpc } from "@/lib/trpc";

export function useTodo() {
  const utils = trpc.useUtils();
  const { data: todos = [], isLoading } = trpc.todo.getAll.useQuery() as {
    data: Todo[];
    isLoading: boolean;
  };

  const create = trpc.todo.create.useMutation({
    onSuccess: () => utils.todo.getAll.invalidate(),
  });

  const toggle = trpc.todo.toggle.useMutation({
    onSuccess: () => utils.todo.getAll.invalidate(),
  });

  const remove = trpc.todo.delete.useMutation({
    onSuccess: () => utils.todo.getAll.invalidate(),
  });

  return { todos, isLoading, create, toggle, remove };
}
