import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "yellow" | "blue" | "pink" | "white" | "black";
}

export function Badge({
  className,
  variant = "yellow",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    yellow: "bg-neo-yellow text-black",
    blue: "bg-neo-blue text-white",
    pink: "bg-neo-pink text-black",
    white: "bg-white text-black dark:bg-zinc-900 dark:text-white",
    black: "bg-black text-white dark:bg-white dark:text-black",
  };

  return (
    <span
      className={cn(
        "neo-border rounded-[8px] px-2.5 py-1 text-xs font-black tracking-wider uppercase select-none shadow-[2px_2px_0px_var(--neo-black)] inline-flex items-center gap-1.5",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
