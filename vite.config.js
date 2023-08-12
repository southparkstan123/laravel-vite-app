
import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig(({ mode }) => {
    process.env = { ...loadEnv(mode, process.cwd()) };

    const host = process.env.VITE_HOST;

    return {
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
        }
    }

});
