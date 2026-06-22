<script setup lang="ts">
import { useContentStore } from "@/stores/content";
import DirectionsMap from "./DirectionsMap.vue";
import OfficeContacts from "./OfficeContacts.vue";
import ShippingPoints from "./ShippingPoints.vue";

const contentStore = useContentStore();
</script>

<template>
    <section class="contacts-view">
        <h1 class="contacts-view__title MaksNN-text XL Bold">
            {{ contentStore.getLocaleText("contacts") }}
        </h1>

        <div class="contacts-view__content">
            <div class="contacts-view__grid">
                <OfficeContacts />
                <ShippingPoints />
            </div>

            <DirectionsMap />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.contacts-view {
    display: flex;
    flex-direction: column;
    gap: 24px;

    padding-bottom: 40px;

    &__title {
        padding: 24px 16px 0;

        text-align: center;
        text-transform: uppercase;
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 32px;

        width: min(1200px, 90vw);

        margin: 0 auto;
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 24px;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    }
}
</style>
