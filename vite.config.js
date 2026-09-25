import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, "index.html"),
        technology: resolve(import.meta.dirname, "technology/index.html"),
        impact: resolve(import.meta.dirname, "impact/index.html"),
        about: resolve(import.meta.dirname, "about/index.html"),
        contact: resolve(import.meta.dirname, "contact/index.html"),
        privacy: resolve(import.meta.dirname, "privacy/index.html"),
      },
    },
  },
});
