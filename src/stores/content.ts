import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { i18n, type i18nContent, type i18nContentName, type LocaleType } from "@helpers/i18n";

export const useContentStore = defineStore("content", () => {
    const locale = ref<LocaleType>("ru");
    const i18nContent = ref<i18nContent>(i18n);

    function toggleLocale() {
        locale.value = locale.value === "en" ? "ru" : "en";
    }

    function getLocaleText(propName: i18nContentName | "empty") {
        return i18nContent.value[locale.value][propName] || "";
    }

    return { i18nContent, locale, toggleLocale, getLocaleText };
});
