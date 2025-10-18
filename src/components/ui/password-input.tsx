"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PasswordInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  /**
   * Controlled visibility (optional). If provided, component becomes controlled.
   */
  isVisible?: boolean;
  /** Called when visibility toggle is clicked. */
  onVisibilityChange?(visible: boolean): void;
  /** Disable toggle button */
  hideToggle?: boolean;
  /** Custom label for show/hide (for i18n) */
  i18n?: { show: string; hide: string };
}

export const PasswordInput = React.forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(function PasswordInput(
  {
    className,
    isVisible: controlledVisible,
    onVisibilityChange,
    hideToggle = false,
    i18n = { show: "Show password", hide: "Hide password" },
    autoComplete = "current-password",
    ...props
  },
  ref,
) {
  const [uncontrolledVisible, setUncontrolledVisible] = React.useState(false);
  const visible = controlledVisible ?? uncontrolledVisible;

  const setVisible = (next: boolean) => {
    if (controlledVisible === undefined) {
      setUncontrolledVisible(next);
    }
    onVisibilityChange?.(next);
  };

  const handleToggle = () => setVisible(!visible);

  const ToggleButton = () => {
    if (hideToggle) {
      return null;
    }
    return (
      <button
        type="button"
        onClick={handleToggle}
        aria-label={visible ? i18n.hide : i18n.show}
        aria-pressed={visible}
        className="text-muted-foreground/80 hover:text-foreground focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px]"
        tabIndex={props.disabled ? -1 : 0}
      >
        {visible ? (
          <EyeOffIcon size={16} aria-hidden="true" />
        ) : (
          <EyeIcon size={16} aria-hidden="true" />
        )}
      </button>
    );
  };

  return (
    <div className="relative">
      <Input
        ref={ref}
        type={visible ? "text" : "password"}
        className={cn("pe-9", className)}
        autoComplete={autoComplete}
        placeholder="********"
        {...props}
      />
      <ToggleButton />
    </div>
  );
});
PasswordInput.displayName = "PasswordInput";
