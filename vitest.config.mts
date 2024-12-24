/// <reference types="vitest" />

import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./test-setup.ts"],
      include: ["**/*.spec.ts"],
      reporters: ["default"],
      coverage: {
        enabled: true,
        provider: "v8", // "istanbul" or "v8"
        reporter: ["text", "json", "html"],
        thresholds: {
          global: {
            statements: 100,
            branches: 100,
            functions: 100,
            lines: 100,
          },
        },
      },
    },
    define: {
      "import.meta.vitest": mode !== "production",
    },
  };
});
