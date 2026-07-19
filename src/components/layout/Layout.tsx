import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import BackToTop from "./BackToTop";
import CommandPalette from "./CommandPalette";
import { useTheme } from "@/hooks/useTheme";

export default function Layout({ children }: { children: ReactNode }) {
  const { theme, toggle } = useTheme();
  return (
    <div className="relative min-h-screen">
      {/* ambient background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-grid-slate bg-[size:44px_44px]" />
      <div aria-hidden className="pointer-events-none fixed inset-x-0 top-[-10rem] -z-10 h-[26rem] bg-gradient-to-b from-accent/10 via-accent-violet/5 to-transparent blur-2xl" />
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main id="main">{children}</main>
      <Footer />
      <BackToTop />
      <CommandPalette />
    </div>
  );
}
