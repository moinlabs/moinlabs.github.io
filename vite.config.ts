import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// base "./" makes the build work on GitHub Pages regardless of repository name
// (paired with HashRouter so deep links never 404 on Pages).
export default defineConfig({
  plugins: [react()],
  base: "./",
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
});
