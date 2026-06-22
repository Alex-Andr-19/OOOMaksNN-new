<script setup lang="ts">
defineProps<{
    title: string;
    downloadLabel: string;
    downloadHref: string;
}>();
</script>

<template>
    <header class="catalog-header">
        <h2 class="catalog-header__title MaksNN-text XL Bold">{{ title }}<sup>®</sup></h2>

        <a :href="downloadHref" download class="catalog-header__download MaksNN-text M">
            {{ downloadLabel }}
        </a>
    </header>
</template>

<style lang="scss" scoped>
.catalog-header {
    display: flex;
    flex-direction: column;

    &__title {
        padding: 16px 0;

        background-color: var(--background-primary);

        text-align: center;
    }

    &__download {
        display: block;

        width: min(600px, 95vw);

        padding: 12px 20px 12px 0;

        background-color: var(--background-tetriary);
        border-radius: 0 24px 24px 0;

        color: var(--text-accent-2);
        text-align: right;

        transition: background-color 0.3s;

        &:hover {
            background-color: var(--brand-color);
        }
    }
}

sup {
    font-size: 16px;
}
</style>
