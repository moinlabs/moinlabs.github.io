import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export function GlassCard({ children, className, hover = true }: { children: ReactNode; className?: string; hover?: boolean }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn("glass rounded-2xl p-6", hover && "transition-shadow hover:shadow-lg hover:shadow-accent/5", className)}
    >
      {children}
    </motion.div>
  );
}
