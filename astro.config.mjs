import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://binaryblitz.ru',
  build: { format: 'file' },
  vite: { plugins: [tailwindcss()] },
});
