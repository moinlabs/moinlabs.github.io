import { lazy } from "react";

// Route registry: path -> lazily loaded page. Paths must match src/data/navigation.ts.
export const routes = [
  { path: "/", Component: lazy(() => import("@/pages/Home")) },
  { path: "/about", Component: lazy(() => import("@/pages/About")) },
  { path: "/projects", Component: lazy(() => import("@/pages/Projects")) },
  { path: "/experience", Component: lazy(() => import("@/pages/Experience")) },
  { path: "/skills", Component: lazy(() => import("@/pages/Skills")) },
  { path: "/education", Component: lazy(() => import("@/pages/Education")) },
  { path: "/achievements", Component: lazy(() => import("@/pages/Achievements")) },
  { path: "/certifications", Component: lazy(() => import("@/pages/Certifications")) },
  { path: "/open-source", Component: lazy(() => import("@/pages/OpenSource")) },
  { path: "/blog", Component: lazy(() => import("@/pages/Blog")) },
  { path: "/timeline", Component: lazy(() => import("@/pages/TimelinePage")) },
  { path: "/roadmap", Component: lazy(() => import("@/pages/Roadmap")) },
  { path: "/resume", Component: lazy(() => import("@/pages/Resume")) },
  { path: "/contact", Component: lazy(() => import("@/pages/Contact")) },
  { path: "*", Component: lazy(() => import("@/pages/NotFound")) },
];
