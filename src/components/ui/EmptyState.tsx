import type { ReactNode } from "react";
import { GlassCard } from "./Card";

export function EmptyState({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <GlassCard hover={false} className="text-center">
      <p className="font-display text-lg font-semibold">{title}</p>
      {children && <div className="muted mt-2 text-sm">{children}</div>}
    </GlassCard>
  );
}
