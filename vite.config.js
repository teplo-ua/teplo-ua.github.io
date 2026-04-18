import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'github-pages-spa-404',
      closeBundle() {
        const indexHtml = resolve('dist/index.html');
        copyFileSync(indexHtml, resolve('dist/404.html'));
      },
    },
  ],
});
