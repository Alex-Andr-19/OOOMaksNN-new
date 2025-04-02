<script setup lang="ts">
import DefaultLayout from "@layouts/DefaultLayout.vue";
import WindowResizeProvider from "./components/WindowResizeProvider.vue";
import { onMounted } from "vue";

onMounted(() => {
    console.log("App mounted!!!");
});
</script>

<template>
    <WindowResizeProvider>
        <DefaultLayout />
    </WindowResizeProvider>
</template>
