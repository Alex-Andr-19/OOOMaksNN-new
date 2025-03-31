import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), vueDevTools()],
    resolve: {
        alias: {
            "@views": fileURLToPath(new URL("./src/views", import.meta.url)),
            "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
            "@helpers": fileURLToPath(new URL("./src/helpers", import.meta.url)),
            "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
