import type { ComponentProps, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent";
const variants = {
  primary: "bg-gradient-to-r from-accent to-accent-violet text-white shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/30 hover:brightness-110",
  ghost: "glass hover:border-accent/60",
};

type Variant = keyof typeof variants;

export function ButtonLink({ to, variant = "primary", className, children, ...rest }: { to: string; variant?: Variant; className?: string; children: ReactNode } & Omit<ComponentProps<typeof Link>, "to">) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </Link>
  );
}

export function ButtonAnchor({ href, variant = "primary", className, children, ...rest }: { href: string; variant?: Variant; className?: string; children: ReactNode } & ComponentProps<"a">) {
  return (
    <a href={href} className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </a>
  );
}
