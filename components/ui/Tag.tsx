import React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "yellow" | "blue" | "pink" | "white";
  interactive?: boolean;
  onDismiss?: (e: React.MouseEvent) => void;
}

export function Tag({
  className,
  variant = "white",
  interactive = false,
  onDismiss,
  children,
  onClick,
  ...props
}: TagProps) {
  const variantStyles = {
    yellow: "bg-neo-yellow text-black hover:bg-neo-yellow/90",
    blue: "bg-neo-blue text-white hover:bg-neo-blue/90",
    pink: "bg-neo-pink text-black hover:bg-neo-pink/90",
    white: "bg-white text-black hover:bg-slate-50 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800",
  };

  const isClickable = interactive || !!onClick;

  return (
    <span
      onClick={onClick}
      className={cn(
        "neo-border rounded-[8px] px-3 py-1 text-xs font-bold font-sans inline-flex items-center gap-1.5 select-none transition-all duration-100",
        variantStyles[variant],
        isClickable &&
          "cursor-pointer active:translate-x-0.5 active:translate-y-0.5 active:shadow-none shadow-[2px_2px_0px_var(--neo-black)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_var(--neo-black)]",
        className
      )}
      {...props}
    >
      {children}
      {onDismiss && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onDismiss(e);
          }}
          className="ml-1 rounded-full p-0.5 inline-flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Remove tag"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </span>
  );
}
