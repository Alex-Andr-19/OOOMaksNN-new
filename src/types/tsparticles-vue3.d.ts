declare module "@tsparticles/vue3" {
    import type { Engine } from "@tsparticles/engine";
    import type { App } from "vue";

    type ParticlesPluginOptions = {
        init?: (engine: Engine) => Promise<void> | void;
    };

    const Particles: (app: App, options?: ParticlesPluginOptions) => void;

    export default Particles;
}
