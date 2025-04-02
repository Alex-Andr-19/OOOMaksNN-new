<script setup lang="ts">
import DefaultLayout from "@layouts/DefaultLayout.vue";
import WindowResizeProvider from "./components/WindowResizeProvider.vue";
</script>

<template>
    <WindowResizeProvider>
        <DefaultLayout />
    </WindowResizeProvider>
</template>
