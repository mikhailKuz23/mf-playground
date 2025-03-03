import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        //помогает с хот релоуд в дев режиме, докрутить чтобы в проде тоже был хот релоуд
        {
            name: 'vite-plugin-reload-endpoint',
            configureServer(server) {
                server.middlewares.use((req, res, next) => {
                    if (req.originalUrl === '/__fullReload') {
                        server.ws.send({ type: 'full-reload' })

                        res.end('Full reload triggered');
                    } else {
                        next();
                    }
                });
            },
        }
    ],
    server: {
        host: true,
        port: 3000,
    },
    build: {
        target: "esnext",
    },
});
