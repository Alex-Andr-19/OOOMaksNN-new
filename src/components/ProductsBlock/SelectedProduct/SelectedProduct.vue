<script setup lang="ts">
import { useContentStore } from "@/stores/content";
import { useProductsStore } from "@/stores/productsStore";
import type { ProductsNames, ProductValue } from "@/types/products";
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";

const contentStore = useContentStore();
const productStore = useProductsStore();

const showPopover = ref<boolean>(false);

const selectedProduct = computed<ProductValue>(() =>
    productStore.getContentByName(
        productStore.selectedProduct as ProductsNames,
        contentStore.locale,
    ),
);

function hidePopover() {
    showPopover.value = false;
}

function handleEscape(ev: KeyboardEvent) {
    if (ev.code === "Escape") hidePopover();
}

watch(
    () => productStore.selectedProduct,
    () => {
        if (productStore.selectedProduct !== null) showPopover.value = true;
    },
);

watch(showPopover, () => {
    if (showPopover.value === false) productStore.setSelectedProduct("");
});

onMounted(() => {
    window.addEventListener("keydown", handleEscape);
});

onBeforeUnmount(() => {
    window.removeEventListener("keydown", handleEscape);
});
</script>

<template>
    <div
        v-if="productStore.selectedProduct !== null"
        class="selectedProduct"
        @click.self="hidePopover"
    >
        <div class="selectedProduct__content">
            <button
                @click="hidePopover"
                class="selectedProduct__closeBtn rect-size MaksNN-text XL Bold"
            >
                ×
            </button>

            <div class="product">
                <h2 class="product__title MaksNN-text H4 Bold">
                    {{ selectedProduct.title }}
                </h2>

                <div class="product__content">
                    <p class="product__info MaksNN-text S">
                        {{ selectedProduct.subtitle }}
                    </p>
                    <p class="product__info MaksNN-text S">
                        {{ selectedProduct.longDescription }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>
