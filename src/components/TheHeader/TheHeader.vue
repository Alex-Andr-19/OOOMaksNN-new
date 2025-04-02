<script setup lang="ts">
import { inject, type Ref } from "vue";
import LocaleBlock from "../LocaleBlock/LocaleBlock.vue";
import NavigationComponent from "../NavigationComponent/NavigationComponent.vue";
import type { DeviceSizeTypes } from "@/types";
import { useContentStore } from "@/stores/content";

const contentStore = useContentStore();
const deviceSize = inject<Ref<DeviceSizeTypes>>("deviceSize");
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
    position: fixed;
    top: 0;

    display: flex;
    align-items: center;
    gap: 24px;

    width: 100%;

    padding: 8px 24px;
    padding-bottom: 0;

    background-color: var(--background-primary);

    z-index: 100;

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
