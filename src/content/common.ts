import type { ContentSection } from "./types";

type CommonContentName =
    | "logoImg"
    | "phone"
    | "contacts"
    | "address"
    | "MainPage"
    | "aboutCompanyDropDown"
    | "aboutUs"
    | "aboutLeader"
    | "products"
    | "homePageTitle"
    | "ooomaksnn"
    | "phone_1"
    | "phone_2";

export const commonContent: ContentSection<CommonContentName> = {
    ru: {
        logoImg: "/images/slogan.svg",
        phone: "Телефон",
        contacts: "Контакты",
        address: "Адрес",
        MainPage: "Главная",
        aboutCompanyDropDown: "О компании",
        aboutUs: "О нас",
        aboutLeader: "Руководитель",
        products: "Продукты",
        homePageTitle: "Главная",
        ooomaksnn: "ООО Макс-НН",
        phone_1: "+7 (831) 434-39-38",
        phone_2: "+7 (831) 434-36-80",
    },
    en: {
        logoImg: "/images/logo_en.webp",
        phone: "Phone",
        contacts: "Contact Us",
        address: "Address",
        MainPage: "Home",
        aboutCompanyDropDown: "About us",
        aboutUs: "The Company",
        aboutLeader: "Our Leader",
        products: "Products",
        homePageTitle: "Home",
        ooomaksnn: "OOO Maks-NN",
        phone_1: "+7 (831) 434-39-38",
        phone_2: "+7 (831) 434-36-80",
    },
};
