<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

type NavigationItemType = {
    text: string;
    link: string;
};
const navigationList = ref<NavigationItemType[]>([
    {
        text: "Главная",
        link: "/",
    },
    {
        text: "О компании",
        link: "/about",
    },
    {
        text: "Продукты",
        link: "/products",
    },
    {
        text: "Контакты",
        link: "/contacts",
    },
]);
</script>

<template>
    <header class="the-header">
        <router-link to="/" class="slogan">
            <img src="/images/slogan.svg" alt="Слоган" class="slogan__img" />
        </router-link>

        <nav class="navigation">
            <ul class="navigation-list">
                <li v-for="el in navigationList" :key="el.link">
                    <router-link
                        :to="el.link"
                        class="navigation__item MaksNN-text S SemiBold"
                        :class="{
                            active: route.path === el.link,
                        }"
                    >
                        {{ el.text }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped src="./style.scss"></style>
