<script setup lang="ts">
import { useContentStore } from "@/stores/content";

const contentStore = useContentStore();
</script>

<template>
    <section class="offers">
        <h2 class="offers__title MaksNN-text XL Bold">
            {{ contentStore.getLocaleText("whatdoweoffer") }}
        </h2>

        <div class="offers__list">
            <div class="offer">
                <div class="offer__logo">
                    <img src="/images/molecule.svg" alt="Молекула" class="offer__img rect-size" />
                </div>

                <p class="offer__text MaksNN-text L XL_tablet">
                    {{ contentStore.getLocaleText("wdwo_1") }}
                </p>
            </div>
            <div class="offer">
                <div class="offer__logo">
                    <img
                        src="/images/handshake.svg"
                        alt="Рукопожатие"
                        class="offer__img rect-size"
                    />
                </div>

                <p class="offer__text MaksNN-text L XL_tablet">
                    {{ contentStore.getLocaleText("wdwo_2") }}
                </p>
            </div>
            <div class="offer">
                <div class="offer__logo">
                    <img src="/images/price-tag.svg" alt="Цены" class="offer__img rect-size" />
                </div>

                <p class="offer__text MaksNN-text L XL_tablet">
                    {{ contentStore.getLocaleText("wdwo_3") }}
                </p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped src="./style.scss"></style>
