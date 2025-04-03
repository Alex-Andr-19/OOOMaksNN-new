<script setup lang="ts">
import MediaCarousel from "@/components/MediaCarousel/MediaCarousel.vue";
import { useContentStore } from "@/stores/content";
import type { i18nContentName } from "@helpers/i18n";
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

        <section class="offers">
            <h2 class="offers__title MaksNN-text L SemiBold">
                {{ contentStore.getLocaleText("whatdoweoffer") }}
            </h2>

            <div class="offers__list">
                <div class="offer">
                    <div class="offer__logo">
                        <img
                            src="/images/molecule.svg"
                            alt="Молекула"
                            class="offer__img rect-size"
                        />
                    </div>

                    <p class="offer__text MaksNN-text L XL_tablet">
                        {{ contentStore.getLocaleText("wdwo_1") }}
                    </p>
                </div>
                <div class="offer">
                    <div class="offer__logo">
                        <img
                            src="/images/handshake.svg"
                            alt="Рукопожатие"
                            class="offer__img rect-size"
                        />
                    </div>

                    <p class="offer__text MaksNN-text L XL_tablet">
                        {{ contentStore.getLocaleText("wdwo_2") }}
                    </p>
                </div>
                <div class="offer">
                    <div class="offer__logo">
                        <img src="/images/price-tag.svg" alt="Цены" class="offer__img rect-size" />
                    </div>

                    <p class="offer__text MaksNN-text L XL_tablet">
                        {{ contentStore.getLocaleText("wdwo_3") }}
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>
