import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Standard Vite configuration; no Lovable editor plugins required.
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
