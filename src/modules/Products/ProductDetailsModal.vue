<script setup lang="ts">
import type { ProductValue } from "@/types/products";
import { onBeforeUnmount, onMounted } from "vue";

defineProps<{
    product: ProductValue;
}>();

const emit = defineEmits<{
    close: [];
}>();

function handleEscape(event: KeyboardEvent) {
    if (event.key === "Escape") emit("close");
}

onMounted(() => {
    window.addEventListener("keydown", handleEscape);
});

onBeforeUnmount(() => {
    window.removeEventListener("keydown", handleEscape);
});
</script>

<template>
    <div class="product-modal" role="dialog" aria-modal="true" @click.self="emit('close')">
        <div class="product-modal__content">
            <button
                type="button"
                class="product-modal__close rect-size MaksNN-text XL Bold"
                aria-label="Закрыть"
                @click="emit('close')"
            >
                ×
            </button>

            <article class="product-details">
                <h2 class="product-details__title MaksNN-text H4 Bold">
                    {{ product.title }}
                </h2>

                <div class="product-details__content">
                    <p class="product-details__info MaksNN-text S">
                        {{ product.subtitle }}
                    </p>
                    <p class="product-details__info MaksNN-text S">
                        {{ product.longDescription }}
                    </p>
                </div>
            </article>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.product-modal {
    position: fixed;
    inset: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100dvw;
    height: 100dvh;

    background-color: rgb(from var(--background-tetriary) r g b / 0.5);

    color: var(--text-accent-2);

    z-index: 101;

    &__content {
        position: relative;

        width: min(1200px, 100dvw);
        min-height: min(700px, 100dvw);

        padding: 16px;

        background-color: var(--background-primary);
        border-radius: 4px;
    }

    &__close {
        position: absolute;
        top: 16px;
        right: 16px;

        display: flex;
        justify-content: center;
        align-items: center;

        border: none;

        color: var(--text-secondary);

        &:hover {
            background: transparent;

            color: var(--text-primary);
        }
    }
}

.product-details {
    display: flex;
    flex-direction: column;
    gap: 16px;

    color: var(--text-primary);

    &__title {
        max-width: 95%;
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 16px;

        padding-top: 16px;

        border-top: 1px solid rgb(from var(--background-tetriary) r g b / 0.5);
    }

    &__info {
        white-space: pre-line;
    }
}
</style>
