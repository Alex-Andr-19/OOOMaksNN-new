<script setup lang="ts">
import { useContentStore } from "@/stores/content";
import OfferCard from "./OfferCard.vue";
import { offers } from "./data";

const contentStore = useContentStore();
</script>

<template>
    <section class="offers">
        <h2 class="offers__title MaksNN-text XL Bold">
            {{ contentStore.getLocaleText("whatdoweoffer") }}
        </h2>

        <div class="offers__list">
            <OfferCard
                v-for="offer in offers"
                :key="offer.textKey"
                :icon="offer.icon"
                :icon-alt="offer.iconAlt"
                :text="contentStore.getLocaleText(offer.textKey)"
            />
        </div>
    </section>
</template>

<style lang="scss" scoped src="./style.scss"></style>
