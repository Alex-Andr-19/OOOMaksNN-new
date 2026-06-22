<script setup lang="ts">
import { useContentStore } from "@/stores/content";
import type { AboutSectionId, AboutTab } from "./types";

defineProps<{
    modelValue: AboutSectionId;
    items: AboutTab[];
}>();

const emit = defineEmits<{
    "update:modelValue": [section: AboutSectionId];
}>();

const contentStore = useContentStore();
</script>

<template>
    <nav class="about-tabs" :aria-label="contentStore.getLocaleText('aboutUs')">
        <button
            v-for="item in items"
            :key="item.id"
            class="about-tabs__item MaksNN-text M SemiBold"
            :class="{ active: modelValue === item.id }"
            type="button"
            role="tab"
            :aria-selected="modelValue === item.id"
            :aria-controls="`about-section-${item.id}`"
            @click="emit('update:modelValue', item.id)"
        >
            {{ contentStore.getLocaleText(item.label) }}
        </button>
    </nav>
</template>

<style lang="scss" scoped>
.about-tabs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;

    width: min(1200px, 90vw);

    margin: 0 auto;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 510px) {
        grid-template-columns: 1fr;
        gap: 4px;
    }

    &__item {
        position: relative;

        min-height: 64px;

        padding: 12px 16px 18px;

        background-color: var(--background-secondary);
        color: var(--text-secondary);
        text-align: center;

        transition:
            color 0.2s,
            background-color 0.2s;

        &::after {
            position: absolute;
            right: 8px;
            bottom: 6px;
            left: 8px;

            height: 5px;

            background-color: #e3dada;
            border-radius: 10px;

            content: "";
            transition: background-color 0.2s;
        }

        &:hover,
        &:focus-visible {
            color: var(--text-primary);
        }

        &.active {
            background-color: var(--background-primary);
            color: var(--text-primary);
        }

        &.active::after {
            background-color: var(--brand-color);
        }
    }
}
</style>
