<script setup lang="ts">
import { useProductsByCategory } from "@/composables/useProductsByCategory";
import { useContentStore } from "@/stores/content";
import { useProductsStore } from "@/stores/productsStore";
import type { ProductValue, ProductsNames } from "@/types/products";
import { computed } from "vue";
import CatalogHeader from "./CatalogHeader.vue";
import ProductDetailsModal from "./ProductDetailsModal.vue";
import ProductGroup from "./ProductGroup.vue";

const contentStore = useContentStore();
const productStore = useProductsStore();
const { groups } = useProductsByCategory();

const selectedProduct = computed<ProductValue | null>(() => {
    const selectedName = productStore.selectedProduct;

    return selectedName ? productStore.getContentByName(selectedName, contentStore.locale) : null;
});

function selectProduct(name: ProductsNames) {
    productStore.setSelectedProduct(name);
}

function closeProduct() {
    productStore.setSelectedProduct("");
}
</script>

<template>
    <section class="product-catalog">
        <CatalogHeader
            :title="contentStore.getLocaleText('maxoilproduction')"
            :download-label="contentStore.getLocaleText('downloadPDF')"
            :download-href="`/files/MAXOIL-products-${contentStore.locale}.pdf`"
        />

        <div class="product-catalog__groups">
            <ProductGroup
                v-for="group in groups"
                :key="group.id"
                :group="group"
                @select="selectProduct"
            />
        </div>
    </section>

    <Teleport to="#modalOverlay">
        <ProductDetailsModal
            v-if="selectedProduct"
            :product="selectedProduct"
            @close="closeProduct"
        />
    </Teleport>
</template>

<style lang="scss" scoped>
.product-catalog {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &__groups {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
    }
}
</style>
