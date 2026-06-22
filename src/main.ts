import "@assets/css/reset.css";
import "@assets/css/theme.css";
import "@assets/css/utils.css";
import "@assets/css/global.css";
import "@assets/css/global.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import Particles from "@tsparticles/vue3";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(Particles, {
    init: async (engine: Engine) => {
        await loadSlim(engine);
    },
});
app.use(createPinia());
app.use(router);

app.mount("#app");
