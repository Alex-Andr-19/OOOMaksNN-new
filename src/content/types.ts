import type { i18nContentName, LocaleType } from "@/types/i18n";

export type ContentSection<ContentName extends i18nContentName> = Record<
    LocaleType,
    Record<ContentName, string>
>;
