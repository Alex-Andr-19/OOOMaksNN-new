<script setup lang="ts">
import MediaCarousel from "@/components/MediaCarousel/MediaCarousel.vue";
import { useContentStore } from "@/stores/content";
import type { i18nContentName } from "@helpers/i18n";
import { onMounted, ref } from "vue";

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

createCarousel();
onMounted(() => {
    console.log("HalloPage mounted!!!");
});
</script>

<template>
    <section class="main-page">
        <div class="welcome-block">
            <MediaCarousel :images="carouselImages" :descriptions="carouselDescriptions" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.welcome-block {
    height: 80dvh;
}
</style>
