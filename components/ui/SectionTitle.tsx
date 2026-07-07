import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  highlightedWord?: string;
  highlightColor?: "yellow" | "blue" | "pink";
  description?: string;
  actionHref?: string;
  actionLabel?: string;
}

export function SectionTitle({
  className,
  title,
  highlightedWord,
  highlightColor = "blue",
  description,
  actionHref,
  actionLabel,
  ...props
}: SectionTitleProps) {
  const colorStyles = {
    yellow: "text-neo-accent",
    blue: "text-neo-accent",
    pink: "text-neo-accent",
  };

  // Render title with dynamic highlighting if a word is specified
  const renderTitle = () => {
    if (!highlightedWord) return title;
    
    const parts = title.split(new RegExp(`(${highlightedWord})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlightedWord.toLowerCase() ? (
        <span key={index} className={cn("inline-block", colorStyles[highlightColor])}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 font-sans pb-4 border-b-4 border-current",
        className
      )}
      {...props}
    >
      <div className="space-y-2 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase leading-none text-foreground">
          {renderTitle()}
        </h2>
        {description && (
          <p className="text-sm md:text-base text-foreground/75 font-medium">
            {description}
          </p>
        )}
      </div>

      {actionHref && actionLabel && (
        <Link
          href={actionHref}
          className="inline-flex items-center text-sm font-black uppercase text-foreground hover:text-primary tracking-wider transition-colors shrink-0 group border-b-2 border-current pb-0.5 cursor-pointer"
        >
          {actionLabel}
          <span className="ml-1 transition-transform group-hover:translate-x-1 duration-150">
            &rarr;
          </span>
        </Link>
      )}
    </div>
  );
}
