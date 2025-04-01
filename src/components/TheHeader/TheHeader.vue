<script setup lang="ts">
import { inject } from "vue";
import LocaleBlock from "../LocaleBlock/LocaleBlock.vue";
import NavigationComponent from "../NavigationComponent/NavigationComponent.vue";
import type { DeviceSizeTypes } from "@/types";
import { useContentStore } from "@/stores/content";

const contentStore = useContentStore();
const deviceSize = inject<DeviceSizeTypes>("deviceSize");
</script>

<template>
    <header class="the-header">
        <router-link to="/" class="slogan">
            <img
                :src="contentStore.i18nContent[contentStore.locale].logoImg"
                alt="Слоган"
                class="slogan__img"
            />
        </router-link>

        <NavigationComponent />

        <LocaleBlock v-if="deviceSize === 'desktop' || deviceSize === 'laptop'" />
    </header>
</template>

<style lang="scss" scoped>
.the-header {
    display: flex;
    align-items: center;
    gap: 24px;

    padding: 8px 24px;
    padding-bottom: 0;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        gap: 16px;

        padding: 8px 0;
        padding-bottom: 0;
    }
}

.slogan {
    &__img {
        height: 80px;

        @media (max-width: 1024px) {
            max-width: 90dvw;
        }
    }
}
</style>
