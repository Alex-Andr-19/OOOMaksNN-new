<script setup lang="ts">
import type { DeviceSizeTypes, WindowSize } from "@/types";
import { provide, ref, onMounted, onBeforeUnmount } from "vue";

const windowSize = ref<WindowSize>({ width: window.innerWidth, height: window.innerHeight });
const deviceSize = ref<DeviceSizeTypes>("desktop");

/** Updates the window size state on resize */
const updateWindowSize = () => {
    windowSize.value = { width: window.innerWidth, height: window.innerHeight };
};

function onResize() {
    const width = Math.min(window.innerWidth, window.screen.width);

    if (1440 < width && width <= 1920) deviceSize.value = "desktop";
    else if (1024 < width && width <= 1440) deviceSize.value = "laptop";
    else if (510 < width && width <= 1024) deviceSize.value = "tablet";
    else if (width <= 510) deviceSize.value = "mobile";
}

onResize();

onMounted(() => {
    window.addEventListener("resize", onResize);
    window.addEventListener("resize", updateWindowSize);
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", onResize);
    window.removeEventListener("resize", updateWindowSize);
});

provide("windowSize", windowSize);
provide("deviceSize", deviceSize);
</script>

<template>
    <slot></slot>
</template>
