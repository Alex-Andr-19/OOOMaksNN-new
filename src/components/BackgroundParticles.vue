<script setup lang="ts">
import particlesConfig from "@/assets/particles.json";
import type { ISourceOptions } from "@tsparticles/engine";

const particlesOptions = particlesConfig as ISourceOptions;
</script>

<template>
    <VueParticles
        id="site-particles"
        class="background-particles"
        :options="particlesOptions"
        aria-hidden="true"
    />
</template>

<style lang="scss" scoped>
.background-particles {
    position: fixed;
    inset: 0;

    width: 100%;
    height: 100%;

    pointer-events: none;
    z-index: 0;

    :deep(canvas) {
        display: block;

        width: 100% !important;
        height: 100% !important;
    }
}
</style>
