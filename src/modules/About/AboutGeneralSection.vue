<script setup lang="ts">
import { useContentStore } from "@/stores/content";
import AboutHero from "./AboutHero.vue";

const emit = defineEmits<{
    showLeader: [];
}>();

const contentStore = useContentStore();
</script>

<template>
    <article id="about-section-general" class="about-general" role="tabpanel">
        <AboutHero
            image="/images/about-us/factory.webp"
            :caption="contentStore.getLocaleText('pvlTextOnImg')"
        />

        <div class="general-info">
            <p class="MaksNN-text M">
                {{ contentStore.getLocaleText("generalInfo_1") }}
            </p>
            <p class="MaksNN-text M">
                {{ contentStore.getLocaleText("generalInfo_2") }}
                <button
                    v-if="contentStore.getLocaleText('generalInfo_2_name')"
                    class="leader-link"
                    type="button"
                    @click="emit('showLeader')"
                >
                    {{ contentStore.getLocaleText("generalInfo_2_name") }}
                </button>
                {{ contentStore.getLocaleText("generalInfo_2_1") }}
            </p>
            <p class="MaksNN-text M">
                {{ contentStore.getLocaleText("generalInfo_3") }}
            </p>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.about-general {
    overflow: hidden;

    background-color: var(--background-secondary);
    border-radius: 4px;
}

.general-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    padding: 32px;

    & > :last-child {
        grid-column: 1 / -1;
    }

    & > p {
        padding: 24px;

        background-color: var(--background-primary);
        border-radius: 4px;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;

        padding: 16px;

        & > :last-child {
            grid-column: auto;
        }

        & > p {
            padding: 16px;
        }
    }
}

.leader-link {
    display: inline;

    padding: 0;

    color: var(--brand-color);
    font: inherit;
    text-decoration: underline;
    text-underline-offset: 3px;
}
</style>
