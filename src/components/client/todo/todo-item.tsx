"use client";

import { useState } from "react";

import { CheckIcon, EditIcon, Trash2Icon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import type { Todo } from "@/db/schema";
import { Spinner } from "@/components/ui/spinner";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string, completed: boolean) => void;
  onEdit: (id: string, title: string) => void;
  onDelete: (id: string) => void;
  isEditing: boolean;
  isDeleting: boolean;
}

export function TodoItem({
  todo,
  onToggle,
  onEdit,
  onDelete,
  isEditing,
  isDeleting,
}: TodoItemProps) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleEdit = () => {
    setIsEditMode(true);
    setEditTitle(todo.title);
  };

  const handleSave = () => {
    if (editTitle.trim() && editTitle !== todo.title) {
      onEdit(todo.id, editTitle.trim());
    }
    setIsEditMode(false);
  };

  const handleCancel = () => {
    setEditTitle(todo.title);
    setIsEditMode(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  if (isEditMode) {
    return (
      <div className="bg-card border-border flex items-center gap-3 rounded-lg border px-4 py-2">
        <Input
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          disabled={isEditing}
          className="flex-1"
        />

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon-sm"
            onClick={handleSave}
            disabled={isEditing || !editTitle.trim()}
          >
            <CheckIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            onClick={handleCancel}
            disabled={isEditing}
          >
            <XIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border-border hover:bg-accent/50 flex items-center gap-3 rounded-lg border px-4 py-2 transition-colors">
      <Checkbox
        checked={todo.completed}
        onCheckedChange={(checked) => onToggle(todo.id, checked === true)}
      />
      {isEditing || isDeleting ? (
        <span className="text-muted-foreground flex flex-1 items-center gap-2">
          <Spinner />
          Processing...
        </span>
      ) : (
        <span
          className={`flex-1 ${
            todo.completed ? "text-muted-foreground line-through" : ""
          }`}
        >
          {isEditing ? "Updating..." : todo.title}
        </span>
      )}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon-sm"
          onClick={handleEdit}
          disabled={isEditing}
        >
          <EditIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon-sm"
          onClick={() => onDelete(todo.id)}
          disabled={isDeleting}
        >
          <Trash2Icon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
