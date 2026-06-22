<script setup lang="ts">
import { useContentStore } from "@/stores/content";

const contentStore = useContentStore();
</script>

<template>
    <article class="contact-card">
        <h2 class="contact-card__title MaksNN-text XL SemiBold">
            {{ contentStore.getLocaleText("infoblock") }}
        </h2>

        <address class="contact-card__body">
            <div class="contact-row">
                <span class="contact-row__label MaksNN-text S SemiBold">
                    {{ contentStore.getLocaleText("address") }}
                </span>
                <p class="MaksNN-text M">
                    {{ contentStore.getLocaleText("infoblockcontent1") }}
                </p>
            </div>

            <div class="contact-row">
                <span class="contact-row__label MaksNN-text S SemiBold">
                    {{ contentStore.getLocaleText("phone") }}
                </span>
                <div class="contact-row__links">
                    <a
                        :href="`tel:${contentStore.getLocaleText('phone_1')}`"
                        class="contact-link MaksNN-text M"
                    >
                        {{ contentStore.getLocaleText("phone_1") }}
                    </a>
                    <a
                        :href="`tel:${contentStore.getLocaleText('phone_2')}`"
                        class="contact-link MaksNN-text M"
                    >
                        {{ contentStore.getLocaleText("phone_2") }}
                    </a>
                </div>
            </div>

            <div class="contact-row">
                <span class="contact-row__label MaksNN-text S SemiBold">E-mail</span>
                <a
                    :href="`mailto:${contentStore.getLocaleText('infoblockcontent3')}`"
                    class="contact-link MaksNN-text M"
                >
                    {{ contentStore.getLocaleText("infoblockcontent3") }}
                </a>
            </div>
        </address>
    </article>
</template>

<style lang="scss" scoped>
.contact-card {
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

    &__body {
        display: flex;
        flex-direction: column;
        gap: 20px;

        font-style: normal;
    }

    @media (max-width: 510px) {
        gap: 16px;

        padding: 20px;
    }
}

.contact-row {
    display: grid;
    grid-template-columns: 110px minmax(0, 1fr);
    gap: 16px;
    align-items: start;

    &__label {
        color: var(--text-secondary);
        text-transform: uppercase;
    }

    &__links {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 6px;
    }

    @media (max-width: 510px) {
        grid-template-columns: 1fr;
        gap: 6px;
    }
}

.contact-link {
    color: var(--text-accent-1);
    overflow-wrap: anywhere;
}
</style>
