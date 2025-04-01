<script setup lang="ts">
import { ref } from "vue";

type MediaCarouselProps = {
    images: string[];
    descriptions: string[];
};

const { images: _images, descriptions: _descriptions } = defineProps<MediaCarouselProps>();

const currentIndex = ref<number>(0);

function circleNumber(min: number, value: number, max: number): number {
    return value < min ? max : value > max ? min : value;
}

function setCurrentIndex(idx: number) {
    currentIndex.value = circleNumber(0, idx, _images.length);
}
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
        </div>
    </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>
