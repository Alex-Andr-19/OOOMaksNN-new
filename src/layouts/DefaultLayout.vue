<script setup lang="ts">
import { RouterView } from "vue-router";
import { onMounted } from "vue";

onMounted(() => {
    console.log("Default layout mounted!!!");
});
</script>

<template>
    <div class="dafault-layout">
        <RouterView />
    </div>
</template>
