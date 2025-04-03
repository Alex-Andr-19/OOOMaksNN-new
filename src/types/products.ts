import type { LocaleType } from "./i18n";

export type ProductsNames =
    | "V-concentrate"
    | "V3-01"
    | "V3-02"
    | "V4-01"
    | "V4-02"
    | "V4-03"
    | "V2"
    | "D-mark-A"
    | "D-mark-B-with-thickening-properties"
    | "D-mark-K-concentrate";

export type ProductCategories =
    | "Viscosity index improvers"
    | "Загустители"
    | "Pour point depressants"
    | "Депрессоры";

export type ProductTableDataType = { title: string; value: string | string[] };

export type ProductValue = {
    title: string;
    subtitle: string;
    shortDescription: string;
    category: ProductCategories;
    longDescription: string;
    tableData: ProductTableDataType[];
    kinematicViscosityTable?: {
        title: string;
        values: ProductTableDataType[];
    };
};
export type Producti18nType = Record<ProductsNames, Record<LocaleType, ProductValue>>;
