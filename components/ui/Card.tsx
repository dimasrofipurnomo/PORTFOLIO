import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "white" | "yellow" | "blue" | "pink" | "outline";
  interactive?: boolean;
}

export function Card({
  className,
  variant = "white",
  interactive = false,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    white: "bg-card text-card-foreground",
    yellow: "bg-neo-yellow text-black",
    blue: "bg-neo-blue text-white",
    pink: "bg-neo-pink text-black",
    outline: "bg-transparent text-foreground",
  };

  return (
    <div
      className={cn(
        "neo-border rounded-[8px] p-6 neo-shadow font-sans",
        variantStyles[variant],
        interactive &&
          "cursor-pointer transition-all duration-200 hover:-translate-x-1.5 hover:-translate-y-1.5 hover:shadow-[14px_14px_0px_var(--neo-black)] active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0px_var(--neo-black)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col space-y-1.5 mb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-2xl font-bold leading-none tracking-tight", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm opacity-80", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("text-sm leading-relaxed", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center pt-4 mt-4 border-t border-current/10", className)} {...props}>
      {children}
    </div>
  );
}
