import { useState } from "react";
import { FiMapPin, FiSend } from "react-icons/fi";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { PageShell, PageHeader, Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/Card";
import { CopyButton } from "@/components/ui/CopyButton";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <Section>
        <PageHeader eyebrow="13 · Contact" title="Let's talk" subtitle="Whether it's a project, an opportunity, or just an interesting problem — my inbox is open." />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <GlassCard hover={false}>
              <p className="font-mono text-xs uppercase tracking-wider muted">Email</p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <a href={`mailto:${profile.email}`} className="font-display text-lg font-semibold hover:text-accent">{profile.email}</a>
                <CopyButton value={profile.email} label="Copy email" />
              </div>
            </GlassCard>
            <GlassCard hover={false}>
              <p className="font-mono text-xs uppercase tracking-wider muted">Location</p>
              <p className="mt-2 inline-flex items-center gap-2 font-medium"><FiMapPin className="text-accent" /> {profile.location}</p>
            </GlassCard>
            <GlassCard hover={false}>
              <p className="mb-3 font-mono text-xs uppercase tracking-wider muted">Social</p>
              <div className="flex flex-wrap gap-2">
                {socials.map(({ label, url, icon: Icon }) => (
                  <a key={label} href={url} target="_blank" rel="noreferrer" className="glass muted inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm hover:border-accent/60 hover:text-accent">
                    <Icon /> {label}
                  </a>
                ))}
              </div>
            </GlassCard>
          </div>

          <GlassCard hover={false}>
            <p className="mb-4 font-display text-lg font-semibold">Send a message</p>
            {sent ? (
              <p className="text-accent-emerald">Thanks! This form is static for now — please use email until a form backend (e.g. Formspree) is connected.</p>
            ) : (
              <div className="space-y-3">
                <input className="glass w-full rounded-xl px-4 py-2.5 text-sm outline-none focus:border-accent" placeholder="Your name" aria-label="Your name" />
                <input className="glass w-full rounded-xl px-4 py-2.5 text-sm outline-none focus:border-accent" placeholder="Your email" type="email" aria-label="Your email" />
                <textarea className="glass min-h-32 w-full rounded-xl px-4 py-2.5 text-sm outline-none focus:border-accent" placeholder="Your message" aria-label="Your message" />
                <button onClick={() => setSent(true)} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-violet px-5 py-2.5 text-sm font-semibold text-white hover:brightness-110">
                  <FiSend /> Send
                </button>
                <p className="muted text-xs">Static UI — wire up Formspree/EmailJS later to make it live.</p>
              </div>
            )}
          </GlassCard>
        </div>
      </Section>
    </PageShell>
  );
}
