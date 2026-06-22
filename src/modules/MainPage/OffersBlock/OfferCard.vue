<script setup lang="ts">
defineProps<{
    icon: string;
    iconAlt: string;
    text: string;
}>();
</script>

<template>
    <article class="offer-card">
        <div class="offer-card__logo">
            <img :src="icon" :alt="iconAlt" class="offer-card__img rect-size" />
        </div>

        <p class="offer-card__text MaksNN-text L XL_tablet">
            {{ text }}
        </p>
    </article>
</template>

<style lang="scss" scoped>
.offer-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    width: 300px;

    @media (max-width: 1024px) {
        flex-direction: row;
        align-items: start;
        gap: 16px;

        width: 100%;
    }

    &__logo {
        display: flex;
        justify-content: center;

        width: 100%;

        padding-bottom: 8px;

        border-bottom: 2px solid var(--background-tetriary);

        @media (max-width: 1024px) {
            width: unset;

            border: none;
        }
    }

    &__img {
        --size: 54px;
    }

    &__text {
        text-align: center;

        @media (max-width: 1024px) {
            text-align: left;
        }
    }
}
</style>
