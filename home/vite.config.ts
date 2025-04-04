import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "home",
            filename: "remoteEntry.js",
            exposes: {
                "./Home": "./src/app/App"
            },
            shared: ["react", "react-dom"],
        }),
    ],
    server: {
        host: "127.0.0.1",
        port: 3001,
        strictPort: true,
    },
    build: {
        rollupOptions: {
            // Меняем входную точку с html файла на ts
            input: "./src/index.ts"
        },
    }
});
