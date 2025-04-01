import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { i18n, type i18nContent, type LocaleType } from "@helpers/i18n";

export const useContentStore = defineStore("content", () => {
    const locale = ref<LocaleType>("ru");
    const i18nContent = ref<i18nContent>(i18n);

    function toggleLocale() {
        locale.value = locale.value === "en" ? "ru" : "en";
    }

    return { i18nContent, locale, toggleLocale };
});
