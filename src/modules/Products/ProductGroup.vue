<script setup lang="ts">
import type { ProductsNames } from "@/types/products";
import ProductCard from "./ProductCard.vue";
import type { ProductCatalogGroup } from "./types";

defineProps<{
    group: ProductCatalogGroup;
}>();

const emit = defineEmits<{
    select: [name: ProductsNames];
}>();
</script>

<template>
    <article class="product-group">
        <h3 class="product-group__title MaksNN-text XL SemiBold">
            {{ group.title }}
        </h3>

        <div class="product-group__list">
            <ProductCard
                v-for="product in group.products"
                :key="product.name"
                :product="product.value"
                @select="emit('select', product.name)"
            />
        </div>
    </article>
</template>

<style lang="scss" scoped>
.product-group {
    display: flex;
    flex-direction: column;
    gap: 24px;

    width: 90vw;

    padding: 32px;

    background-color: var(--background-secondary);

    @media (max-width: 510px) {
        gap: 12px;

        padding: 12px;
    }

    &__title {
        text-align: center;
    }

    &__list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 1fr));
        gap: 16px 32px;
    }
}
</style>
