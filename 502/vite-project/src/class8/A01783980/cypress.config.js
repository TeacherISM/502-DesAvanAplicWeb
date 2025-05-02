// cypress.config.ts
import { defineConfig } from "cypress";
import { defineConfig as defineViteConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import path from "path";

// ESM replacement for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig: defineViteConfig({
        plugins: [react()],
        resolve: {
          alias: {
            // Add any path aliases your project uses
            "@": path.resolve(__dirname, "../../src"),
          },
        },
      }),
    },
  },
});
