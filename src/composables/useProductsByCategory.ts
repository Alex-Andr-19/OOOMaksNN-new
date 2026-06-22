import { useContentStore } from "@/stores/content";
import { useProductsStore } from "@/stores/productsStore";
import type { ProductCatalogGroup } from "@/modules/Products/types";
import { computed } from "vue";

export function useProductsByCategory() {
    const contentStore = useContentStore();
    const productStore = useProductsStore();

    const groups = computed<ProductCatalogGroup[]>(() => {
        const products = productStore.productNames.map((name) => ({
            name,
            value: productStore.getContentByName(name, contentStore.locale),
        }));

        const isDepressor = ({ value }: (typeof products)[number]) =>
            value.category === "Pour point depressants" || value.category === "Депрессоры";

        const depressors = products.filter(isDepressor);
        const thickeners = products.filter((product) => !isDepressor(product));

        const result: ProductCatalogGroup[] = [
            {
                id: "thickeners",
                title: thickeners[0]?.value.category ?? "",
                products: thickeners,
            },
            {
                id: "depressors",
                title: depressors[0]?.value.category ?? "",
                products: depressors,
            },
        ];

        return result.filter((group) => group.products.length > 0);
    });

    return { groups };
}
