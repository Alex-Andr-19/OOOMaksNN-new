<script setup lang="ts">
import { useContentStore } from "@/stores/content";

const contentStore = useContentStore();
</script>

<template>
    <div class="locale-block">
        <button @click="contentStore.toggleLocale" class="locale-toggle MaksNN-text S">
            {{ contentStore.locale }}
        </button>

        <span class="company-name MaksNN-text XS M_tablet M_mobile Bold"> MAX-NN Ltd. </span>
    </div>
</template>

<style lang="scss" scoped>
.locale-block {
    display: flex;
    align-items: center;
    gap: 8px;
}
.locale-toggle {
    width: 40px;

    text-transform: uppercase;
}
</style>
