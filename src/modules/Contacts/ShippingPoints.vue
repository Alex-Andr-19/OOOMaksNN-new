<script setup lang="ts">
import { useContentStore } from "@/stores/content";
import type { i18nContentName } from "@/types/i18n";

const contentStore = useContentStore();

const shippingPointKeys: i18nContentName[] = ["infoblockcontent5", "infoblockcontent6"];
</script>

<template>
    <article class="shipping-card">
        <h2 class="shipping-card__title MaksNN-text XL SemiBold">
            {{ contentStore.getLocaleText("infoblockcontent4") }}
        </h2>

        <div class="shipping-card__list">
            <div v-for="(key, index) in shippingPointKeys" :key="key" class="shipping-point">
                <span class="shipping-point__number MaksNN-text M Bold">
                    {{ index + 1 }}
                </span>
                <p class="MaksNN-text M">
                    {{ contentStore.getLocaleText(key) }}
                </p>
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.shipping-card {
    display: flex;
    flex-direction: column;
    gap: 24px;

    padding: 32px;

    background-color: var(--background-secondary);
    border-top: 5px solid var(--brand-color);
    border-radius: 4px;

    &__title {
        padding-bottom: 16px;

        border-bottom: 1px solid #d8d8d8;
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    @media (max-width: 510px) {
        gap: 16px;

        padding: 20px;
    }
}

.shipping-point {
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr);
    gap: 16px;
    align-items: center;

    padding: 16px;

    background-color: var(--background-primary);
    border-radius: 4px;

    &__number {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 44px;
        height: 44px;
        max-height: none;

        background-color: var(--brand-color);
        border-radius: 50%;

        color: var(--text-accent-2);
    }

    @media (max-width: 510px) {
        grid-template-columns: 36px minmax(0, 1fr);
        gap: 12px;

        padding: 12px;

        &__number {
            width: 36px;
            height: 36px;
        }
    }
}
</style>
