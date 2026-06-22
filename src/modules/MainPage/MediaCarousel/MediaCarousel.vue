<script setup lang="ts">
import { useCarousel } from "@/composables/useCarousel";
import { computed } from "vue";
import type { MediaSlide } from "./types";

type MediaCarouselProps = {
    slides: MediaSlide[];
};

const props = defineProps<MediaCarouselProps>();
const slidesCount = computed(() => props.slides.length);

const {
    containerRef: mediaCarouselElement,
    currentIndex,
    select,
    next,
    previous,
} = useCarousel({
    slidesCount,
});
</script>

<template>
    <div class="media-carousel">
        <div class="media-carousel__tools">
            <button type="button" class="tool" aria-label="Предыдущий слайд" @click="previous">
                <div class="tool__arrow-left masked-block rect-size"></div>
            </button>
            <button type="button" class="tool" aria-label="Следующий слайд" @click="next">
                <div class="tool__arrow-right masked-block rect-size"></div>
            </button>

            <div class="road-map-block">
                <button
                    v-for="(_, index) in slides"
                    :key="index"
                    type="button"
                    class="road-map-block__item"
                    :class="{ selected: index === currentIndex }"
                    :aria-label="`Перейти к слайду ${index + 1}`"
                    @click="select(index)"
                ></button>
            </div>
        </div>

        <div ref="mediaCarouselElement" class="media-carousel__list-wrapper" tabindex="-1">
            <div class="media-carousel__list">
                <div
                    v-for="slide in slides"
                    :key="slide.image"
                    class="media-carousel__item"
                    :style="{ backgroundImage: `url(${slide.image})` }"
                >
                    <div class="text-block MaksNN-text L M_tablet L_mobile SemiBold">
                        {{ slide.description }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>
