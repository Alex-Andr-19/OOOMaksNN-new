<script setup lang="ts">
defineProps<{
    image: string;
    caption: string;
    imagePosition?: string;
}>();
</script>

<template>
    <div class="about-hero">
        <img
            :src="image"
            alt=""
            class="about-hero__image"
            :style="{ objectPosition: imagePosition }"
        />
        <p class="about-hero__caption MaksNN-text L SemiBold">
            {{ caption }}
        </p>
    </div>
</template>

<style lang="scss" scoped>
.about-hero {
    position: relative;

    min-height: 420px;

    &__image {
        position: absolute;
        inset: 0;

        width: 100%;
        height: 100%;

        object-fit: cover;
    }

    &__caption {
        position: absolute;
        right: 24px;
        bottom: 24px;
        left: 24px;

        padding: 20px;

        background-color: rgb(255 255 255 / 82%);
        border-left: 5px solid var(--brand-color);
        border-radius: 4px;

        color: var(--text-primary);
    }

    @media (max-width: 768px) {
        min-height: 340px;

        &__caption {
            right: 12px;
            bottom: 12px;
            left: 12px;

            padding: 12px;
        }
    }
}
</style>
