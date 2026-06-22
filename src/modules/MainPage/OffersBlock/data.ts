import type { i18nContentName } from "@/types/i18n";

export type Offer = {
    icon: string;
    iconAlt: string;
    textKey: i18nContentName;
};

export const offers: Offer[] = [
    {
        icon: "/images/molecule.svg",
        iconAlt: "Молекула",
        textKey: "wdwo_1",
    },
    {
        icon: "/images/handshake.svg",
        iconAlt: "Рукопожатие",
        textKey: "wdwo_2",
    },
    {
        icon: "/images/price-tag.svg",
        iconAlt: "Цены",
        textKey: "wdwo_3",
    },
];
