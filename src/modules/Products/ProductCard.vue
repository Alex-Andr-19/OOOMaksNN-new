<script setup lang="ts">
import type { ProductValue } from "@/types/products";

defineProps<{
    product: ProductValue;
}>();

const emit = defineEmits<{
    select: [];
}>();
</script>

<template>
    <button type="button" class="product-card" @click="emit('select')">
        <span class="product-card__title MaksNN-text L SemiBold">
            {{ product.title }}
        </span>
        <span class="product-card__description MaksNN-text M">
            {{ product.shortDescription }}
        </span>
    </button>
</template>

<style lang="scss" scoped>
.product-card {
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding: 20px;

    background-color: var(--background-primary);
    border: 1px solid var(--background-tetriary);
    border-radius: 4px;

    color: var(--text-primary);

    transform-origin: top right;
    transition:
        transform 0.3s,
        box-shadow 0.3s;
    box-shadow: 5px 5px 5px 0 #0000;

    &:hover,
    &:focus-visible {
        transform: rotate(2deg) translateY(-2px);
        box-shadow: 5px 5px 5px 0 rgb(from var(--background-tetriary) r g b / 0.7);
    }

    &__title {
        text-align: center;
    }
}
</style>
