<script setup lang="ts">
import DefaultLayout from "@layouts/DefaultLayout.vue";
import BackgroundParticles from "./components/BackgroundParticles.vue";
import WindowResizeProvider from "./components/WindowResizeProvider.vue";
</script>

<template>
    <BackgroundParticles />

    <div class="app-content">
        <WindowResizeProvider>
            <DefaultLayout />
        </WindowResizeProvider>
    </div>
</template>

<style lang="scss" scoped>
.app-content {
    position: relative;

    min-height: 100dvh;

    z-index: 1;
}
</style>
