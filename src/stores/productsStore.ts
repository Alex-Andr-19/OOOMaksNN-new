import { ref } from "vue";
import { defineStore } from "pinia";
import type { Producti18nType, ProductsNames } from "@/types/products";
import { i18n } from "@helpers/i18nProducts";
import type { LocaleType } from "@/types/i18n";

export const useProductsStore = defineStore("products", () => {
    const content = ref<Producti18nType>(i18n);
    const productNames = Object.keys(content.value) as ProductsNames[];
    const selectedProduct = ref<ProductsNames | null>(null);

    function getContentByName(name: ProductsNames, locale: LocaleType) {
        return content.value[name][locale];
    }

    function setSelectedProduct(name: ProductsNames | "") {
        if (name !== "") {
            selectedProduct.value = name;
        } else {
            selectedProduct.value = null;
        }
    }

    function getProductNameByTitle(title: string) {
        let res: ProductsNames | undefined;

        let key: ProductsNames;
        for (key in content.value) {
            if (content.value[key].ru.title === title || content.value[key].en.title === title) {
                res = key;
                break;
            }
        }

        return res || "";
    }

    return {
        productNames,
        selectedProduct,
        getContentByName,
        setSelectedProduct,
        getProductNameByTitle,
    };
});
