import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiBriefcase, FiChevronDown } from "react-icons/fi";
import { experience } from "@/data/experience";
import { PageShell, PageHeader, Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/utils/cn";

const typeLabel = { work: "Full-time", internship: "Internship", academic: "Academic" } as const;

export default function Experience() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <PageShell>
      <Section>
        <PageHeader eyebrow="03 · Experience" title="Where I've worked" subtitle="Industry, research, and teaching — expandable cards with the details." />
        <ol className="relative space-y-5 border-l card-border pl-6">
          {experience.map((e, i) => {
            const isOpen = open === i;
            return (
              <li key={e.company + e.role} className="relative">
                <span className="absolute -left-[1.95rem] top-5 flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent" aria-hidden>
                  <FiBriefcase size={12} />
                </span>
                <GlassCard hover={false} className="p-0">
                  <button
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <div>
                      <p className="font-display text-lg font-semibold">{e.role}</p>
                      <p className="muted text-sm">{e.company}{e.location ? ` · ${e.location}` : ""}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="muted hidden font-mono text-xs sm:inline">{e.period}</span>
                      <Badge>{typeLabel[e.type]}</Badge>
                      <FiChevronDown className={cn("muted transition-transform", isOpen && "rotate-180")} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="border-t card-border p-5 pt-4">
                          {e.impact && <p className="mb-3 text-sm font-medium text-accent">{e.impact}</p>}
                          <ul className="muted space-y-2 text-sm leading-relaxed">
                            {e.points.map((pt) => <li key={pt}>· {pt}</li>)}
                          </ul>
                          {e.tech && e.tech.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-1.5">
                              {e.tech.map((t) => <Badge key={t}>{t}</Badge>)}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              </li>
            );
          })}
        </ol>
      </Section>
    </PageShell>
  );
}
