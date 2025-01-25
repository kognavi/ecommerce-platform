import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // pathモジュールを追加
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000
    },
    build: {
        outDir: 'dist',
        sourcemap: true
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
});
