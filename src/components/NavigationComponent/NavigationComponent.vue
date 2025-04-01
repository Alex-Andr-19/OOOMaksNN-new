<script setup lang="ts">
import { useContentStore } from "@/stores/content";
import type { DeviceSizeTypes } from "@/types";
import type { i18nContentName } from "@helpers/i18n";
import { inject, ref, watch } from "vue";
import { useRoute } from "vue-router";
import LocaleBlock from "../LocaleBlock/LocaleBlock.vue";

const route = useRoute();
const contentStore = useContentStore();

const deviceSize = inject<DeviceSizeTypes>("deviceSize");

const showNavigation = ref<boolean>(false);

type NavigationItemType = {
    text: string;
    link: string;
    propName: i18nContentName;
};
const navigationList = ref<NavigationItemType[]>([
    {
        propName: "MainPage",
        text: "",
        link: "/",
    },
    {
        propName: "aboutUs",
        text: "",
        link: "/about",
    },
    {
        propName: "products",
        text: "",
        link: "/products",
    },
    {
        propName: "contacts",
        text: "",
        link: "/contacts",
    },
]);

function toggleNavigation() {
    showNavigation.value = !showNavigation.value;
}

watch(
    () => contentStore.locale,
    () => {
        navigationList.value = navigationList.value.map((el) => ({
            ...el,
            text: contentStore.i18nContent[contentStore.locale][el.propName],
        }));
    },
    { immediate: true },
);
</script>

<template>
    <nav class="navigation">
        <div
            v-if="deviceSize === 'tablet' || deviceSize === 'mobile'"
            class="navigation__small-variant-row"
        >
            <button @click="toggleNavigation" class="burger">
                <img src="/images/menu-burger.svg" alt="Меню" class="burger__img rect-size" />
            </button>
            <LocaleBlock />
        </div>
        <ul class="navigation-list" :class="{ opened: showNavigation }">
            <li v-for="(el, idx) in navigationList" :key="el.link">
                <router-link
                    :to="el.link"
                    class="navigation__item MaksNN-text S SemiBold"
                    :class="{
                        active: route.path === el.link,
                        'first-child': idx === 0,
                    }"
                >
                    {{ el.text }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.navigation {
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    padding: 8px 0;

    background-color: var(--background-secondary);
    border-top: 2px solid var(--brand-color);
    border-bottom: 2px solid var(--brand-color);

    @media (max-width: 1024px) {
        width: 100%;

        padding: 8px 16px;
    }

    &-list {
        display: flex;
        justify-content: center;
        gap: 16px;

        width: 100%;

        list-style: none;

        text-transform: uppercase;

        @media (max-width: 1024px) {
            flex-direction: column;
            justify-content: start;
            gap: 0;

            height: 0;

            overflow: hidden;

            &.opened {
                height: auto;
            }
        }
    }

    &__item {
        padding: 8px;

        color: var(--text-secondary);

        &.active {
            color: var(--text-primary);
        }

        @media (max-width: 1024px) {
            &.first-child {
                margin-top: 16px;
            }
        }
    }

    &__small-variant-row {
        display: flex;
        justify-content: space-between;
    }
}

.burger {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 4px 8px;

    &__img {
        // --size: 30px;
    }
}
</style>
