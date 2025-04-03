<script setup lang="ts">
import ProductsBlock from "@/components/ProductsBlock/ProductsBlock.vue";
import { useContentStore } from "@/stores/content";
import type { i18nContentName } from "@/types/i18n";
import MediaCarousel from "@modules/MainPage/MediaCarousel/MediaCarousel.vue";
import OffersBlock from "@modules/MainPage/OffersBlock/OffersBlock.vue";
import { onMounted, ref, watch } from "vue";

const contentStore = useContentStore();

const carouselImages = ref<string[]>([]);
const carouselDescriptions = ref<string[]>([]);

function createCarousel() {
    let i;
    for (i = 1; i <= 4; i++) {
        carouselImages.value.push(`/images/carousel/slide-${i}.webp`);
        let textName = `carousel_slide_${i}` as i18nContentName;
        carouselDescriptions.value.push(contentStore.getLocaleText(textName));
    }
}

watch(
    () => contentStore.locale,
    () => {
        carouselDescriptions.value = [];
        let i;
        for (i = 1; i <= 4; i++) {
            let textName = `carousel_slide_${i}` as i18nContentName;
            carouselDescriptions.value.push(contentStore.getLocaleText(textName));
        }
    },
);

createCarousel();
onMounted(() => {
    console.log("HalloPage mounted!!!");
});
</script>

<template>
    <div class="main-page">
        <section class="welcome-block">
            <MediaCarousel :images="carouselImages" :descriptions="carouselDescriptions" />
        </section>

        <OffersBlock />

        <ProductsBlock />
    </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>
