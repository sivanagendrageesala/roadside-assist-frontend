import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // 👈 This ensures CSS and assets load correctly in Render or subdirectory environments
});