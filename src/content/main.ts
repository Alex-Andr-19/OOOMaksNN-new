import type { ContentSection } from "./types";

type MainContentName =
    | "downloadPDF"
    | "whatdoweoffer"
    | "maxoilproduction"
    | "wdwo_1"
    | "wdwo_2"
    | "wdwo_3"
    | "carousel_slide_1"
    | "carousel_slide_2"
    | "carousel_slide_3"
    | "carousel_slide_4";

export const mainContent: ContentSection<MainContentName> = {
    ru: {
        downloadPDF: "Скачать каталог продукции МАКСОЙЛ®",
        whatdoweoffer: "ЧТО МЫ ПРЕДЛАГАЕМ?",
        maxoilproduction: "ПРОДУКЦИЯ МАКСОЙЛ",
        wdwo_1: "Высококачественные депрессорные и загущающие присадки к моторным, гидравлическим и трансмиссионным маслам.",
        wdwo_2: "Надежное партнерство, персональный подход к техническим требованиям каждого клиента.",
        wdwo_3: "Лояльные цены и широкие возможности по условиям поставки продуктов",
        carousel_slide_1: "Мы производим присадки с 2000 года",
        carousel_slide_2: "Крупнейшие производители масел выбирают наш продукт",
        carousel_slide_3: "№1 в России по производству депрессорных и загущающих присадок к маслам",
        carousel_slide_4: "Мы поставляем продукцию на экспорт",
    },
    en: {
        downloadPDF: "Download the catalogue",
        whatdoweoffer: "WHAT DO WE OFFER?",
        maxoilproduction: "MAXOIL PRODUCTS",
        wdwo_1: "High-quality Pour point depressants and viscosity modifiers for engine, gear and hydraulic oils",
        wdwo_2: "Strong partnership, an individual approach to the technical requirements of each customer",
        wdwo_3: "Affordable pricing, various terms of delivery of the products",
        carousel_slide_1: "We have been manufacturing additives since 2000",
        carousel_slide_2: "Major oil manufacturers choose our brand",
        carousel_slide_3: "We produce for export",
        carousel_slide_4:
            "The leading manufacturer of Pour point depressants and Viscosity index improvers in Russia",
    },
};
