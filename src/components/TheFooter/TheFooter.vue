<script setup lang="ts">
import { useContentStore } from "@/stores/content";
import type { i18nContentName } from "@helpers/i18n";
import { ref, watch } from "vue";

const contentStore = useContentStore();

type ContactsType = {
    title: string;
    text: string | string[];
    propName: i18nContentName | "empty";
};
const contacts = ref<ContactsType[]>([
    {
        propName: "phone",
        title: contentStore.getLocaleText("phone"),
        text: [contentStore.getLocaleText("phone_1"), contentStore.getLocaleText("phone_2")],
    },
    {
        propName: "address",
        title: contentStore.getLocaleText("address"),
        text: contentStore.getLocaleText("infoblockcontent1"),
    },
    {
        propName: "empty",
        title: "E-mail",
        text: contentStore.getLocaleText("infoblockcontent3"),
    },
]);

watch(
    () => contentStore.locale,
    () => {
        contacts.value[1].text = contentStore.getLocaleText("infoblockcontent1");

        for (let i in contacts.value) {
            contacts.value[i].title = contentStore.getLocaleText(contacts.value[i].propName);
            if (contacts.value[i].title.length === 0) {
                contacts.value[i].title = "E-mail";
            }
        }
    },
);
</script>

<template>
    <footer class="footer">
        <div class="footer__contacts">
            <div class="contact">
                <span class="contact__title MaksNN-text M L_tablet XL_mobile SemiBold">
                    {{ contacts[0].title }}
                </span>

                <div class="contact__text-block">
                    <a
                        :href="`tel:${contacts[0].text[0]}`"
                        class="contact__link MaksNN-text S M_tablet"
                    >
                        {{ contacts[0].text[0] }}
                    </a>
                    <a
                        :href="`tel:${contacts[0].text[1]}`"
                        class="contact__link MaksNN-text S M_tablet"
                    >
                        {{ contacts[0].text[1] }}
                    </a>
                </div>
            </div>
            <div class="contact">
                <span class="contact__title MaksNN-text M L_tablet XL_mobile SemiBold">
                    {{ contacts[1].title }}
                </span>

                <span class="contact__text-block MaksNN-text S">
                    {{ contacts[1].text }}
                </span>
            </div>
            <div class="contact">
                <span class="contact__title MaksNN-text M L_tablet XL_mobile SemiBold">
                    {{ contacts[1].title }}
                </span>

                <div class="contact__text-block">
                    <a
                        :href="`mailto:${contacts[2].text}`"
                        class="contact__link MaksNN-text S M_tablet"
                    >
                        {{ contacts[2].text }}
                    </a>
                </div>
            </div>
        </div>

        <span class="footer__copy-right MaksNN-text S"> © ООО "Макс-НН", 1994-2025 </span>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    padding: 16px;
    padding-bottom: 36px;

    background-color: var(--background-secondary);
    border-top: 2px solid var(--brand-color);

    &__contacts {
        display: flex;
        justify-content: space-evenly;
        align-items: start;

        width: 80%;

        @media (max-width: 1024px) {
            flex-direction: column;
            justify-content: start;
            align-items: center;
            gap: 16px;

            width: 100%;
        }
    }

    &__copy-right {
        color: var(--text-secondary);
    }
}

.contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    color: var(--text-secondary);

    &__text-block {
        display: flex;
        flex-direction: column;
        gap: 4px;

        width: 164px;

        text-align: center;

        @media (max-width: 1024px) {
            width: 100%;
        }
    }

    &__link {
        color: var(--text-accent-1);
    }
}
</style>
