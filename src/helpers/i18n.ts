import { aboutContent } from "@/content/about";
import { commonContent } from "@/content/common";
import { contactsContent } from "@/content/contacts";
import { mainContent } from "@/content/main";
import type { i18nContent } from "@/types/i18n";

export const i18n: i18nContent = {
    ru: {
        empty: undefined,
        ...commonContent.ru,
        ...mainContent.ru,
        ...contactsContent.ru,
        ...aboutContent.ru,
    },
    en: {
        empty: undefined,
        ...commonContent.en,
        ...mainContent.en,
        ...contactsContent.en,
        ...aboutContent.en,
    },
};
