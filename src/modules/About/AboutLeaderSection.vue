<script setup lang="ts">
import { useContentStore } from "@/stores/content";
import type { i18nContentName } from "@/types/i18n";
import { interview } from "./data";
import InterviewItem from "./InterviewItem.vue";

const contentStore = useContentStore();

const leaderLines: i18nContentName[] = [
    "leaderLine1",
    "leaderLine2",
    "leaderLine3",
    "leaderLine4",
    "leaderLine5",
];
</script>

<template>
    <article id="about-section-leader" class="about-leader" role="tabpanel">
        <div class="about-leader__profile">
            <img
                src="/images/about-us/leader.webp"
                :alt="contentStore.getLocaleText('leaderLine1')"
                class="about-leader__image"
            />
            <div class="about-leader__info">
                <p
                    v-for="(line, index) in leaderLines"
                    :key="line"
                    class="MaksNN-text M"
                    :class="{ SemiBold: index === 0 }"
                >
                    {{ contentStore.getLocaleText(line) }}
                </p>
            </div>
        </div>

        <div v-if="contentStore.locale === 'ru'" class="interview">
            <p class="interview__intro MaksNN-text M">
                Могут ли российские производители успешно состязаться с крупными западными
                компаниями? Директор ООО «Макс-НН» Александр Долгополов получил ответы на этот
                вопрос в результате собственной работы.
            </p>
            <h2 class="interview__title MaksNN-text XL Bold">
                Александр Долгополов: как развить уникальное производство
            </h2>

            <InterviewItem v-for="item in interview" :key="item.question" :item="item" />
        </div>
    </article>
</template>

<style lang="scss" scoped>
.about-leader {
    padding: 32px;

    background-color: var(--background-secondary);
    border-radius: 4px;

    &__profile {
        display: grid;
        grid-template-columns: minmax(220px, 300px) 1fr;
        gap: 32px;
        align-items: start;
    }

    &__image {
        width: 100%;

        border: 4px solid var(--brand-color);
        border-radius: 4px;
    }

    &__info {
        display: flex;
        flex-direction: column;
        gap: 14px;

        padding: 28px;

        background-color: var(--background-primary);
        border-radius: 4px;
    }

    @media (max-width: 768px) {
        padding: 16px;

        &__profile {
            grid-template-columns: 1fr;
            gap: 16px;
        }

        &__image {
            width: min(100%, 360px);

            margin: 0 auto;
        }

        &__info {
            padding: 20px;
        }
    }
}

.interview {
    display: flex;
    flex-direction: column;
    gap: 24px;

    margin-top: 32px;
    padding-top: 32px;

    border-top: 2px solid var(--brand-color);

    &__intro {
        padding: 20px;

        background-color: var(--background-primary);
        border-left: 5px solid var(--brand-color);
    }

    &__title {
        text-align: center;
        text-transform: uppercase;
    }
}
</style>
