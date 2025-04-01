<script setup lang="ts">
import TheFooter from "@/components/TheFooter/TheFooter.vue";
import TheHeader from "@/components/TheHeader/TheHeader.vue";
import type { DeviceSizeTypes } from "@/types";
import { inject, onMounted, ref, watch, type Ref } from "vue";

const deviceSize = inject<Ref<DeviceSizeTypes>>("deviceSize") as Ref<DeviceSizeTypes>;

const header = ref();
const offsetTop = ref<number>(0);

watch(
    () => deviceSize.value,
    () => {
        setTimeout(() => {
            offsetTop.value = header.value.$el.clientHeight;
        }, 0);
    },
);

onMounted(() => {
    console.log("Default layout mounted!!!");

    offsetTop.value = header.value.$el.clientHeight;
});
</script>

<template>
    <div class="default-layout">
        <TheHeader ref="header" />

        <main class="main" :style="{ paddingTop: `${offsetTop}px` }">
            <RouterView />
        </main>

        <TheFooter />
    </div>
</template>

<style lang="scss" scoped>
.default-layout {
    display: flex;
    flex-direction: column;

    min-height: 100dvh;
}

.main {
    flex-grow: 1;
}
</style>
