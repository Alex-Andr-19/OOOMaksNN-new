<script setup lang="ts">
import { useContentStore } from "@/stores/content";

const contentStore = useContentStore();

const mapUrl =
    "https://yandex.ru/map-widget/v1/?um=constructor%3Aa8ff21de741524b52df9c3aa775873782a4c39dd19b5b3eafd71b12fade102c7&source=constructor";
</script>

<template>
    <section class="contacts">
        <h1 class="contacts__title MaksNN-text XL Bold">
            {{ contentStore.getLocaleText("contacts") }}
        </h1>

        <div class="contacts__content">
            <div class="contacts-grid">
                <article class="contact-card contact-card--office">
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
                            <span class="contact-row__label MaksNN-text S SemiBold"> E-mail </span>
                            <a
                                :href="`mailto:${contentStore.getLocaleText('infoblockcontent3')}`"
                                class="contact-link MaksNN-text M"
                            >
                                {{ contentStore.getLocaleText("infoblockcontent3") }}
                            </a>
                        </div>
                    </address>
                </article>

                <article class="contact-card">
                    <h2 class="contact-card__title MaksNN-text XL SemiBold">
                        {{ contentStore.getLocaleText("infoblockcontent4") }}
                    </h2>

                    <div class="shipping-points">
                        <div class="shipping-point">
                            <span class="shipping-point__number MaksNN-text M Bold">1</span>
                            <p class="MaksNN-text M">
                                {{ contentStore.getLocaleText("infoblockcontent5") }}
                            </p>
                        </div>
                        <div class="shipping-point">
                            <span class="shipping-point__number MaksNN-text M Bold">2</span>
                            <p class="MaksNN-text M">
                                {{ contentStore.getLocaleText("infoblockcontent6") }}
                            </p>
                        </div>
                    </div>
                </article>
            </div>

            <section class="directions">
                <h2 class="directions__title MaksNN-text XL SemiBold">
                    {{ contentStore.getLocaleText("directions") }}
                </h2>

                <div class="directions__map-wrapper">
                    <iframe
                        :src="mapUrl"
                        class="directions__map"
                        :title="contentStore.getLocaleText('directions')"
                        allowfullscreen
                    ></iframe>
                </div>
            </section>
        </div>
    </section>
</template>

<style lang="scss" scoped src="./style.scss"></style>
