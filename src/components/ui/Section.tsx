import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export function Section({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}
    >
      {children}
    </motion.section>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="pb-24 pt-28"
    >
      {children}
    </motion.div>
  );
}

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <header className="mb-12">
      {eyebrow && <p className="mb-2 font-mono text-sm text-accent">{eyebrow}</p>}
      <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      {subtitle && <p className="muted mt-4 max-w-2xl text-lg">{subtitle}</p>}
    </header>
  );
}
