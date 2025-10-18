"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";

interface TodoFormProps {
  onAdd: (title: string) => void;
  isPending: boolean;
}

export function TodoForm({ onAdd, isPending }: TodoFormProps) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (trimmed) {
      onAdd(trimmed);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex items-center space-x-2">
      <Input
        type="text"
        placeholder="Add a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button type="submit" disabled={isPending || !title.trim()}>
        {isPending ? <Spinner /> : "Add"}
      </Button>
    </form>
  );
}
