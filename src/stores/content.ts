import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { i18n } from "@helpers/i18n";
import type { i18nContent, i18nContentName, LocaleType } from "@/types/i18n";

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
