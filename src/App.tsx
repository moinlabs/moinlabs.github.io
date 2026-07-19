import { Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { routes } from "@/routes";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  return (
    <Layout>
      <ScrollToTop />
      {/* No AnimatePresence here: exit-gated routing (mode="wait") deadlocks
          when a lazy route suspends mid-exit — the fallback replaces the tree,
          the exit never completes, and the next page never mounts. Pages
          animate in via PageShell's initial/animate instead. */}
      <Suspense
        fallback={
          <div className="flex min-h-[60vh] items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" aria-label="Loading" />
          </div>
        }
      >
        <Routes location={location}>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
    </Layout>
  );
}
