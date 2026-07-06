import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SkillCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  icon?: LucideIcon;
  variant?: "yellow" | "blue" | "pink" | "white";
  interactive?: boolean;
}

export function SkillCard({
  className,
  name,
  icon: Icon,
  variant = "white",
  interactive = true,
  ...props
}: SkillCardProps) {
  const variantStyles = {
    yellow: "bg-neo-yellow text-black",
    blue: "bg-neo-blue text-white",
    pink: "bg-neo-pink text-black",
    white: "bg-card text-card-foreground",
  };

  return (
    <div
      className={cn(
        "neo-border rounded-[8px] px-4 py-3 flex items-center gap-3 font-sans shadow-[4px_4px_0px_var(--neo-black)] select-none",
        variantStyles[variant],
        interactive &&
          "cursor-pointer transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_var(--neo-black)] active:translate-x-0 active:translate-y-0 active:shadow-none",
        className
      )}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5 stroke-[2.5px] shrink-0" />}
      <span className="font-black text-sm uppercase tracking-wider">{name}</span>
    </div>
  );
}
