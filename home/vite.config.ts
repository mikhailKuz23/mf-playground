import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import dotenv from 'dotenv'
import basicSsl from '@vitejs/plugin-basic-ssl'

const dotenvConfig = dotenv.config();
const prodUrl = dotenvConfig.parsed?.VITE_API_URL ?? ''


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        basicSsl(),
        federation({
            name: "home",
            filename: "remoteEntry.js",
            exposes: {
                "./Home": "./src/App"
            },
            shared: ["react", "react-dom"],
        }),
        //помогает с хот релоуд в дев режиме, докрутить чтобы в проде тоже был хот релоуд
        {
            name: 'vite-plugin-notify-host-on-rebuild',
            apply(config, { command }) {
                return Boolean(command === 'build' && config.build?.watch);
            },
            async buildEnd(error) {
                if (!error) {
                    try {
                        await fetch('http://localhost:3000/__fullReload');
                    } catch (e) {
                        // noop
                    }
                }
            },
        }
    ],
    server: {
        host: "127.0.0.1",
        port: 3001,
        strictPort: true,
    },
    preview: {
        host: '127.0.0.1',
        port: 3001,
        strictPort: true,
        cors: {
            origin: [`${prodUrl}:3000`],
        },
    },

    build: {
        rollupOptions: {
            // Меняем входную точку с html файла на ts
            input: "./src/index.ts"
        },
    }
});
