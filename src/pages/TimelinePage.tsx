import { motion } from "framer-motion";
import { timeline } from "@/data/timeline";
import { PageShell, PageHeader, Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/Card";

export default function TimelinePage() {
  return (
    <PageShell>
      <Section>
        <PageHeader eyebrow="10 · Timeline" title="The journey so far" subtitle="From a school award in Alwar to Chevron in Bangalore." />
        <ol className="relative space-y-6 border-l card-border pl-6">
          {timeline.map((t, i) => (
            <motion.li
              key={t.year + t.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="relative"
            >
              <span className="absolute -left-[2.1rem] top-4 flex h-7 w-7 items-center justify-center rounded-full bg-accent/15 font-mono text-[10px] text-accent" aria-hidden>
                {t.year.slice(2)}
              </span>
              <GlassCard hover={false}>
                <p className="font-mono text-xs text-accent">{t.year}</p>
                <p className="font-display font-semibold">{t.title}</p>
                <p className="muted mt-1 text-sm">{t.description}</p>
              </GlassCard>
            </motion.li>
          ))}
        </ol>
      </Section>
    </PageShell>
  );
}
