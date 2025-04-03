import { ref } from "vue";
import { defineStore } from "pinia";
import type { Producti18nType, ProductsNames } from "@/types/products";
import { i18n } from "@helpers/i18nProducts";
import type { LocaleType } from "@/types/i18n";

export const useProductsStore = defineStore("products", () => {
    const content = ref<Producti18nType>(i18n);

    function getContentByName(name: ProductsNames, locale: LocaleType) {
        return content.value[name][locale];
    }

    return { content, getContentByName };
});
