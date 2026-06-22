import type { ProductValue, ProductsNames } from "@/types/products";

export type CatalogProduct = {
    name: ProductsNames;
    value: ProductValue;
};

export type ProductCatalogGroup = {
    id: "thickeners" | "depressors";
    title: string;
    products: CatalogProduct[];
};
