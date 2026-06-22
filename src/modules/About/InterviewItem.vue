<script setup lang="ts">
import type { InterviewItem } from "./types";

defineProps<{
    item: InterviewItem;
}>();
</script>

<template>
    <div class="interview-item">
        <h3 class="interview-item__question MaksNN-text M SemiBold">
            {{ item.question }}
        </h3>
        <p
            v-for="paragraph in item.answer"
            :key="paragraph"
            class="interview-item__answer MaksNN-text M"
        >
            {{ paragraph }}
        </p>
    </div>
</template>

<style lang="scss" scoped>
.interview-item {
    display: flex;
    flex-direction: column;
    gap: 12px;

    &__question {
        color: var(--brand-color);
    }

    &__answer {
        padding-left: 20px;

        border-left: 2px solid #d8d8d8;
    }
}
</style>
