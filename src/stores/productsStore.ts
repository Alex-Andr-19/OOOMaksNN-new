import { ref } from "vue";
import { defineStore } from "pinia";
import type { Producti18nType, ProductsNames } from "@/types/products";
import { i18n } from "@helpers/i18nProducts";
import type { LocaleType } from "@/types/i18n";

export const useProductsStore = defineStore("products", () => {
    const content = ref<Producti18nType>(i18n);
    const productNames = Object.keys(content.value) as ProductsNames[];

    function getContentByName(name: ProductsNames, locale: LocaleType) {
        return content.value[name][locale];
    }

    return { productNames, getContentByName };
});
