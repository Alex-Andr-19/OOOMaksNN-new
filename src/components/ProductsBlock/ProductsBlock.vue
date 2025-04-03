<script setup lang="ts">
import { useContentStore } from "@/stores/content";
import { useProductsStore } from "@/stores/productsStore";
import type { ProductsNames, ProductValue } from "@/types/products";
import { ref, watch } from "vue";

const contentStore = useContentStore();
const productStore = useProductsStore();

const productsByCategory = ref<{
    thikeners: ProductValue[];
    depressors: ProductValue[];
}>({
    thikeners: [],
    depressors: [],
});

function getProductsData() {
    productsByCategory.value.depressors = [];
    productsByCategory.value.thikeners = [];

    let el: ProductsNames;
    for (el of productStore.productNames) {
        const product: ProductValue = productStore.getContentByName(el, contentStore.locale);

        if (product.category === "Pour point depressants" || product.category === "Депрессоры") {
            productsByCategory.value.depressors.push(product);
        } else {
            productsByCategory.value.thikeners.push(product);
        }
    }
}
getProductsData();

watch(() => contentStore.locale, getProductsData);
</script>

<template>
    <section class="products-block">
        <div class="products-block__title-row">
            <h2 class="products-block__title MaksNN-text XL Bold">
                {{ contentStore.getLocaleText("maxoilproduction") }}<sup>®</sup>
            </h2>

            <div class="products-block__load-file-block">
                <a
                    :href="`MAXOIL-products-${contentStore.locale}.pdf`"
                    download
                    class="load-product-file MaksNN-text M"
                >
                    {{ contentStore.getLocaleText("downloadPDF") }}
                </a>
            </div>
        </div>

        <div class="products-block__content">
            <article v-for="group in productsByCategory" class="product-group">
                <h3 class="product-group__title MaksNN-text XL SemiBold">
                    {{ group[0].category }}
                </h3>

                <div class="product-group__list">
                    <button v-for="el in group" class="product-item">
                        <p class="product-item__title MaksNN-text L SemiBold">
                            {{ el.title }}
                        </p>
                        <p class="product-item__description MaksNN-text M">
                            {{ el.shortDescription }}
                        </p>
                    </button>
                </div>
            </article>
        </div>
    </section>
</template>

<style lang="scss" scoped src="./style.scss"></style>
