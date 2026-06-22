<script setup lang="ts">
import ProductCatalog from "@/modules/Products/ProductCatalog.vue";
import { useContentStore } from "@/stores/content";
import type { i18nContentName } from "@/types/i18n";
import MediaCarousel from "@modules/MainPage/MediaCarousel/MediaCarousel.vue";
import type { MediaSlide } from "@modules/MainPage/MediaCarousel/types";
import OffersBlock from "@modules/MainPage/OffersBlock/OffersBlock.vue";
import { computed } from "vue";

const contentStore = useContentStore();

const carouselSlides = computed<MediaSlide[]>(() =>
    Array.from({ length: 4 }, (_, index) => {
        const slideNumber = index + 1;
        const textKey = `carousel_slide_${slideNumber}` as i18nContentName;

        return {
            image: `/images/carousel/slide-${slideNumber}.webp`,
            description: contentStore.getLocaleText(textKey),
        };
    }),
);
</script>

<template>
    <div class="main-page">
        <section class="welcome-block">
            <MediaCarousel :slides="carouselSlides" />
        </section>

        <OffersBlock />

        <ProductCatalog />
    </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>
