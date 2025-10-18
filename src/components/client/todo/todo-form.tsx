"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        placeholder="Add a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1"
      />
      <Button type="submit" disabled={isPending || !title.trim()}>
        {isPending ? "Adding..." : "Add"}
      </Button>
    </form>
  );
}
