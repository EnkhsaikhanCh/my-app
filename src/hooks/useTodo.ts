"use client";

import { useMutation, useQuery } from "@tanstack/react-query";

import { trpc } from "@/lib/trpc";

export function useTodo() {
  const todosQuery = useQuery(trpc.todo.getAll.queryOptions());
  const todos = todosQuery.data ?? [];
  const isLoading = todosQuery.isLoading;

  const create = useMutation(
    trpc.todo.create.mutationOptions({ onSuccess: () => todosQuery.refetch() }),
  );
  const toggle = useMutation(
    trpc.todo.toggle.mutationOptions({ onSuccess: () => todosQuery.refetch() }),
  );
  const remove = useMutation(
    trpc.todo.delete.mutationOptions({ onSuccess: () => todosQuery.refetch() }),
  );

  return { todos, isLoading, create, toggle, remove };
}
