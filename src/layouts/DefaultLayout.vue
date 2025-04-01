<script setup lang="ts">
import TheHeader from "@/components/TheHeader/TheHeader.vue";
import { onMounted } from "vue";

onMounted(() => {
    console.log("Default layout mounted!!!");
});
</script>

<template>
    <div class="default-layout">
        <TheHeader />
        <RouterView />
    </div>
</template>

<style lang="scss" scoped>
.default-layout {
    display: flex;
    flex-direction: column;

    min-height: 100dvh;
}
</style>
