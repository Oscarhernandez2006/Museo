import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        // Evita crashes por EBUSY al sincronizar archivos (p. ej. OneDrive) dentro de public/ e img/
        watch: {
            ignored: ['**/public/**', '**/img/**'],
        },
    },
});
