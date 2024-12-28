// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'lib/index.ts',
      name: 'gg-db',
      fileName: (format) => `gg-db.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      output: {
        globals: {},
      },
    },
  },
});
