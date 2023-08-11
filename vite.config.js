const host = '192.168.56.56'; 
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/ts/app.ts'],
            refresh: true
        }),
        vue()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('resources/ts', import.meta.url))
        },
    },
    server: {
        host,
        hmr: {
            host,
        },
        watch: {
            usePolling: true
        }
    },
});
