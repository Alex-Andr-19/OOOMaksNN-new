<script setup lang="ts">
import { useContentStore } from "@/stores/content";
import { CONTACTS_MAP_URL } from "./config";

const contentStore = useContentStore();
</script>

<template>
    <section class="directions">
        <h2 class="directions__title MaksNN-text XL SemiBold">
            {{ contentStore.getLocaleText("directions") }}
        </h2>

        <div class="directions__map-wrapper">
            <iframe
                :src="CONTACTS_MAP_URL"
                class="directions__map"
                :title="contentStore.getLocaleText('directions')"
                allowfullscreen
            ></iframe>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.directions {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &__title {
        text-align: center;
    }

    &__map-wrapper {
        overflow: hidden;

        min-height: 500px;

        background-color: var(--background-secondary);
        border: 1px solid var(--brand-color);
        border-radius: 4px;
    }

    &__map {
        display: block;

        width: 100%;
        height: 500px;

        border: 0;
    }

    @media (max-width: 768px) {
        &__map-wrapper {
            min-height: 420px;
        }

        &__map {
            height: 420px;
        }
    }
}
</style>
