<script setup lang="ts">
import { useContentStore } from "@/stores/content";
import type { i18nContentName } from "@/types/i18n";
import AboutHero from "./AboutHero.vue";

const contentStore = useContentStore();

const developmentLines: i18nContentName[] = [
    "productDev_1",
    "productDev_2",
    "productDev_3",
    "productDev_4",
    "productDev_5",
];
</script>

<template>
    <article id="about-section-development" class="about-development" role="tabpanel">
        <AboutHero
            image="/images/about-us/chemical.jpg"
            image-position="center 58%"
            :caption="contentStore.getLocaleText('pvlTextOnImg')"
        />

        <ol class="about-development__list">
            <li
                v-for="(line, index) in developmentLines"
                :key="line"
                class="about-development__item"
            >
                <span class="about-development__number MaksNN-text M Bold">
                    {{ index + 1 }}
                </span>
                <p class="MaksNN-text M">
                    {{ contentStore.getLocaleText(line) }}
                </p>
            </li>
        </ol>
    </article>
</template>

<style lang="scss" scoped>
.about-development {
    overflow: hidden;

    background-color: var(--background-secondary);
    border-radius: 4px;

    &__list {
        display: flex;
        flex-direction: column;
        gap: 20px;

        padding: 32px;

        list-style: none;
    }

    &__item {
        display: grid;
        grid-template-columns: 48px 1fr;
        gap: 16px;
        align-items: start;

        padding: 20px;

        background-color: var(--background-primary);
        border-radius: 4px;
    }

    &__number {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 48px;
        height: 48px;
        max-height: none;

        background-color: var(--brand-color);
        border-radius: 50%;

        color: var(--text-accent-2);
    }

    @media (max-width: 510px) {
        &__list {
            padding: 16px;
        }

        &__item {
            grid-template-columns: 36px 1fr;
            gap: 12px;

            padding: 14px;
        }

        &__number {
            width: 36px;
            height: 36px;
        }
    }
}
</style>
