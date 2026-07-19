import type { NavItem } from "@/types";

// Single source of truth for navigation. Add a page here + a route in routes.tsx
// and it appears in the navbar, mobile menu, command palette, and footer automatically.
export const navItems: NavItem[] = [
  { label: "Home", path: "/", inNav: true },
  { label: "About", path: "/about", inNav: true },
  { label: "Projects", path: "/projects", inNav: true },
  { label: "Experience", path: "/experience", inNav: true },
  { label: "Skills", path: "/skills", inNav: true },
  { label: "Education", path: "/education", inNav: false },
  { label: "Achievements", path: "/achievements", inNav: false },
  { label: "Certifications", path: "/certifications", inNav: false },
  { label: "Open Source", path: "/open-source", inNav: false },
  { label: "Blog", path: "/blog", inNav: false },
  { label: "Timeline", path: "/timeline", inNav: false },
  { label: "Roadmap", path: "/roadmap", inNav: false },
  { label: "Resume", path: "/resume", inNav: true },
  { label: "Contact", path: "/contact", inNav: true },
];
