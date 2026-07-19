import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export function Badge({ children, active = false, onClick, className }: { children: ReactNode; active?: boolean; onClick?: () => void; className?: string }) {
  const Tag = onClick ? "button" : "span";
  return (
    <Tag
      onClick={onClick}
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
        active ? "border-accent bg-accent/15 text-accent" : "card-border bg-transparent muted",
        onClick && "hover:border-accent hover:text-accent",
        className
      )}
    >
      {children}
    </Tag>
  );
}
