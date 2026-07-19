import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiMapPin, FiChevronDown } from "react-icons/fi";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { projects } from "@/data/projects";
import { PageShell, Section } from "@/components/ui/Section";
import { ButtonAnchor, ButtonLink } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

function useTyping(phrases: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = phrases[i % phrases.length];
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDeleting(false); setI((v) => v + 1); }
      }
    }, deleting ? 35 : 65);
    return () => clearTimeout(timeout);
  }, [text, deleting, i, phrases]);
  return text;
}

export default function Home() {
  const typed = useTyping(profile.typingPhrases);
  const featured = projects.filter((p) => p.featured);

  return (
    <PageShell>
      {/* Hero */}
      <Section className="flex min-h-[78vh] flex-col justify-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="font-mono text-sm text-accent">
          Hi, my name is
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="mt-3 font-display text-5xl font-bold tracking-tight sm:text-7xl"
        >
          {profile.name.split(" ").slice(0, 2).join(" ")}{" "}
          <span className="gradient-text">{profile.name.split(" ").slice(2).join(" ")}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="mt-4 h-8 font-mono text-lg text-accent-violet sm:text-2xl"
          aria-label={profile.title}
        >
          {typed}<span className="animate-blink">▌</span>
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="muted mt-6 max-w-2xl text-lg leading-relaxed">
          {profile.intro}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="muted mt-6 flex flex-wrap items-center gap-4 text-sm">
          <span className="inline-flex items-center gap-1.5"><FiMapPin className="text-accent" /> {profile.location}</span>
          <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-accent-emerald" /> {profile.availability}</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-8 flex flex-wrap gap-3">
          <ButtonLink to="/projects">View my work <FiArrowRight /></ButtonLink>
          <ButtonAnchor href={profile.resumeUrl} variant="ghost" download>
            <FiDownload /> Download resume
          </ButtonAnchor>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-8 flex gap-2">
          {socials.map(({ label, url, icon: Icon }) => (
            <a key={label} href={url} target="_blank" rel="noreferrer" aria-label={label} className="glass muted rounded-xl p-3 hover:border-accent/60 hover:text-accent">
              <Icon />
            </a>
          ))}
        </motion.div>
        <motion.div
          animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}
          className="muted mt-14 flex items-center gap-2 text-xs" aria-hidden
        >
          <FiChevronDown /> scroll
        </motion.div>
      </Section>

      {/* Featured projects */}
      <Section className="mt-10">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl font-bold">Featured work</h2>
          <ButtonLink to="/projects" variant="ghost" className="hidden sm:inline-flex">All projects <FiArrowRight /></ButtonLink>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {featured.map((p) => (
            <GlassCard key={p.id}>
              <p className="font-mono text-xs text-accent">{p.period}</p>
              <h3 className="mt-2 font-display text-xl font-semibold">{p.title}</h3>
              <p className="muted mt-2 text-sm leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.slice(0, 4).map((t) => <Badge key={t}>{t}</Badge>)}
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Quick stats sourced from real resume facts */}
      <Section className="mt-16">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { k: "AIR 130", v: "GATE 2024, All India Rank" },
            { k: "120+", v: "PG students taught as TA at IISc" },
            { k: "< 1 MB", v: "CNN deployed on a microcontroller" },
          ].map((s) => (
            <GlassCard key={s.k} hover={false} className="text-center">
              <p className="font-display text-3xl font-bold gradient-text">{s.k}</p>
              <p className="muted mt-1 text-sm">{s.v}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
