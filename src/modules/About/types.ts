import type { i18nContentName } from "@/types/i18n";

export type AboutSectionId = "general" | "news" | "leader" | "development";

export type AboutTab = {
    id: AboutSectionId;
    label: i18nContentName;
};

export type NewsContent = {
    title: string;
    paragraphs: string[];
};

export type InterviewItem = {
    question: string;
    answer: string[];
};
