import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "./Card";

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  icon?: LucideIcon;
  variant?: "white" | "yellow" | "blue" | "pink";
  interactive?: boolean;
}

export function StatCard({
  className,
  value,
  label,
  icon: Icon,
  variant = "white",
  interactive = false,
  ...props
}: StatCardProps) {
  const iconColorStyles = {
    white: "text-primary",
    yellow: "text-black",
    blue: "text-white",
    pink: "text-black",
  };

  return (
    <Card
      variant={variant}
      interactive={interactive}
      className={cn("flex flex-col justify-between min-h-[160px] p-6 text-left", className)}
      {...props}
    >
      {/* Icon Area */}
      {Icon && (
        <div className="mb-4">
          <Icon className={cn("w-6 h-6 stroke-[2.5px]", iconColorStyles[variant])} />
        </div>
      )}

      {/* Stats Data */}
      <div className="space-y-1 mt-auto">
        <div className="text-4xl md:text-5xl font-black tracking-tight leading-none">
          {value}
        </div>
        <div className="text-xs font-bold tracking-wider uppercase opacity-80 pt-1">
          {label}
        </div>
      </div>
    </Card>
  );
}
