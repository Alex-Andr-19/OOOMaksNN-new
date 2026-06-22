<script setup lang="ts">
import { useContentStore } from "@/stores/content";
import { computed } from "vue";
import { newsContent } from "./data";

const contentStore = useContentStore();
const currentNews = computed(() => newsContent[contentStore.locale]);
</script>

<template>
    <article id="about-section-news" class="about-news" role="tabpanel">
        <img
            src="/images/about-us/rosneft.jpg"
            :alt="currentNews.title"
            class="about-news__image"
        />
        <div class="about-news__content">
            <h2 class="about-news__title MaksNN-text XL SemiBold">
                {{ currentNews.title }}
            </h2>
            <p v-for="paragraph in currentNews.paragraphs" :key="paragraph" class="MaksNN-text M">
                {{ paragraph }}
            </p>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.about-news {
    display: grid;
    grid-template-columns: minmax(280px, 0.9fr) minmax(0, 1.6fr);
    overflow: hidden;

    background-color: var(--background-secondary);
    border-radius: 4px;

    &__image {
        width: 100%;
        height: 100%;
        min-height: 460px;

        object-fit: cover;
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 16px;

        padding: 32px;
    }

    &__title {
        padding-bottom: 16px;

        border-bottom: 2px solid var(--brand-color);
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;

        &__image {
            min-height: 240px;
            max-height: 360px;
        }

        &__content {
            padding: 20px;
        }
    }
}
</style>
