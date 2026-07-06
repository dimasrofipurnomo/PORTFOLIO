import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "yellow" | "blue" | "pink" | "white" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "yellow",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const variantStyles = {
    yellow: "bg-neo-yellow text-black hover:bg-neo-yellow/90",
    blue: "bg-neo-blue text-white hover:bg-neo-blue/90",
    pink: "bg-neo-pink text-black hover:bg-neo-pink/90",
    white: "bg-white text-black hover:bg-slate-50 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800",
    outline: "bg-transparent text-foreground hover:bg-slate-100 dark:hover:bg-zinc-800",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs font-bold",
    md: "px-6 py-3 text-sm font-bold",
    lg: "px-8 py-4 text-base font-bold",
  };

  return (
    <button
      className={cn(
        "neo-border rounded-[8px] font-sans inline-flex items-center justify-center tracking-wide text-center transition-all duration-150 cursor-pointer shadow-[4px_4px_0px_var(--neo-black)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_var(--neo-black)] active:translate-x-0 active:translate-y-0 active:shadow-none focus:outline-none disabled:opacity-50 disabled:pointer-events-none select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
