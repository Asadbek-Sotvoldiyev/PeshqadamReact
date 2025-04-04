import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    open: true,
    cors: true,
    strictPort: true,
  },
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 500,
  },
  define: {
    "process.env": {},
  },
});
