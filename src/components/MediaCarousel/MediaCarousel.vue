<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, type Ref } from "vue";

type MediaCarouselProps = {
    images: string[];
    descriptions: string[];
};

const { images: _images, descriptions: _descriptions } = defineProps<MediaCarouselProps>();

const mediaCarouselElement = ref<HTMLElement>() as Ref<HTMLElement>;
const currentIndex = ref<number>(0);

let scrollListener;

function circleNumber(min: number, value: number, max: number): number {
    return value < min ? max : value > max ? min : value;
}

function setCurrentIndex(idx: number) {
    currentIndex.value = circleNumber(0, idx, _images.length - 1);

    const targetScrollLeftValue = mediaCarouselElement.value.clientWidth * currentIndex.value;
    if (mediaCarouselElement.value.scrollLeft !== targetScrollLeftValue) {
        mediaCarouselElement.value.scroll({
            left: targetScrollLeftValue,
            behavior: "smooth",
        });
    }
}

function eventListenerOnScroll() {
    const targetIndex = Math.round(
        mediaCarouselElement.value.scrollLeft / mediaCarouselElement.value.clientWidth,
    );
    setCurrentIndex(targetIndex);
}
onMounted(() => {
    mediaCarouselElement.value.addEventListener("scrollend", eventListenerOnScroll);

    setInterval(() => {
        setCurrentIndex(currentIndex.value + 1);
    }, 10000);
});
onBeforeUnmount(() => {
    mediaCarouselElement.value.removeEventListener("scrollend", eventListenerOnScroll);
});
</script>

<template>
    <div class="media-carousel">
        <div class="media-carousel__tools">
            <button @click="setCurrentIndex(currentIndex - 1)" class="tool">
                <div class="tool__arrow-left masked-block rect-size"></div>
            </button>
            <button @click="setCurrentIndex(currentIndex + 1)" class="tool">
                <div class="tool__arrow-right masked-block rect-size"></div>
            </button>

            <div class="road-map-block">
                <button
                    v-for="(el, idx) in _images"
                    class="road-map-block__item"
                    :class="{ selected: idx === currentIndex }"
                    @click="setCurrentIndex(idx)"
                ></button>
            </div>
        </div>

        <div ref="mediaCarouselElement" class="media-carousel__list-wrapper" tabindex="-1">
            <div class="media-carousel__list">
                <div
                    v-for="(el, idx) in _images"
                    class="media-carousel__item"
                    :style="{ backgroundImage: `url(${el})` }"
                >
                    <div class="text-block MaksNN-text L M_tablet L_mobile SemiBold">
                        {{ _descriptions[idx] }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>
