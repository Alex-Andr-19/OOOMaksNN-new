<script setup lang="ts">
import { useContentStore } from "@/stores/content";
import { ref } from "vue";
import AboutDevelopmentSection from "./AboutDevelopmentSection.vue";
import AboutGeneralSection from "./AboutGeneralSection.vue";
import AboutLeaderSection from "./AboutLeaderSection.vue";
import AboutNewsSection from "./AboutNewsSection.vue";
import AboutTabs from "./AboutTabs.vue";
import { aboutTabs } from "./data";
import type { AboutSectionId } from "./types";

const contentStore = useContentStore();
const activeSection = ref<AboutSectionId>("general");
</script>

<template>
    <section class="about-view">
        <h1 class="about-view__title MaksNN-text XL Bold">
            {{ contentStore.getLocaleText("aboutCompanyDropDown") }}
        </h1>

        <AboutTabs v-model="activeSection" :items="aboutTabs" />

        <div class="about-view__content">
            <AboutGeneralSection
                v-if="activeSection === 'general'"
                @show-leader="activeSection = 'leader'"
            />
            <AboutNewsSection v-else-if="activeSection === 'news'" />
            <AboutLeaderSection v-else-if="activeSection === 'leader'" />
            <AboutDevelopmentSection v-else />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.about-view {
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding-bottom: 40px;

    &__title {
        padding: 24px 16px 8px;

        text-align: center;
        text-transform: uppercase;
    }

    &__content {
        width: min(1200px, 90vw);

        margin: 0 auto;
    }
}
</style>
