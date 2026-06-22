import {
    onBeforeUnmount,
    onMounted,
    ref,
    toValue,
    watch,
    type MaybeRefOrGetter,
    type Ref,
} from "vue";

type UseCarouselOptions = {
    slidesCount: MaybeRefOrGetter<number>;
    autoplayDelay?: number;
};

export function useCarousel({ slidesCount, autoplayDelay = 10_000 }: UseCarouselOptions): {
    containerRef: Ref<HTMLElement | null>;
    currentIndex: Ref<number>;
    select: (index: number) => void;
    next: () => void;
    previous: () => void;
} {
    const containerRef = ref<HTMLElement | null>(null);
    const currentIndex = ref(0);

    let autoplayTimer: ReturnType<typeof setInterval> | undefined;

    function normalizeIndex(index: number): number {
        const count = toValue(slidesCount);

        if (count <= 0) return 0;
        if (index < 0) return count - 1;
        if (index >= count) return 0;

        return index;
    }

    function select(index: number) {
        currentIndex.value = normalizeIndex(index);

        const container = containerRef.value;
        if (!container) return;

        const targetScrollLeft = container.clientWidth * currentIndex.value;
        if (Math.abs(container.scrollLeft - targetScrollLeft) > 1) {
            container.scrollTo({
                left: targetScrollLeft,
                behavior: "smooth",
            });
        }
    }

    function next() {
        select(currentIndex.value + 1);
    }

    function previous() {
        select(currentIndex.value - 1);
    }

    function handleScrollEnd() {
        const container = containerRef.value;
        if (!container || container.clientWidth === 0) return;

        currentIndex.value = normalizeIndex(
            Math.round(container.scrollLeft / container.clientWidth),
        );
    }

    watch(
        () => toValue(slidesCount),
        (count) => {
            if (count <= 0) {
                currentIndex.value = 0;
            } else if (currentIndex.value >= count) {
                select(0);
            }
        },
    );

    onMounted(() => {
        containerRef.value?.addEventListener("scrollend", handleScrollEnd);
        autoplayTimer = setInterval(next, autoplayDelay);
    });

    onBeforeUnmount(() => {
        containerRef.value?.removeEventListener("scrollend", handleScrollEnd);

        if (autoplayTimer) clearInterval(autoplayTimer);
    });

    return {
        containerRef,
        currentIndex,
        select,
        next,
        previous,
    };
}
