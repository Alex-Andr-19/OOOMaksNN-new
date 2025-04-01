<script setup lang="ts">
import { inject } from "vue";
import LocaleBlock from "../LocaleBlock/LocaleBlock.vue";
import NavigationComponent from "../NavigationComponent/NavigationComponent.vue";
import type { DeviceSizeTypes } from "@/types";

const deviceSize = inject<DeviceSizeTypes>("deviceSize");
</script>

<template>
    <header class="the-header">
        <router-link to="/" class="slogan">
            <img src="/images/slogan.svg" alt="Слоган" class="slogan__img" />
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

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        gap: 16px;

        padding: 8px 0;
    }
}

.slogan {
    &__img {
        height: 80px;

        @media (max-width: 1024px) {
            height: 164px;
        }
    }
}
</style>
