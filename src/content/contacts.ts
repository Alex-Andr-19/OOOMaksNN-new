import type { ContentSection } from "./types";

type ContactsContentName =
    | "askquestion"
    | "company"
    | "submitBtn"
    | "formSent"
    | "formError"
    | "formInvalid"
    | "directions"
    | "ihavereadandagreewith"
    | "privacypolicy"
    | "ofthiswebsite"
    | "infoblock"
    | "infoblockcontent1"
    | "infoblockcontent2"
    | "infoblockcontent3"
    | "infoblockcontent4"
    | "infoblockcontent5"
    | "infoblockcontent6";

export const contactsContent: ContentSection<ContactsContentName> = {
    ru: {
        askquestion: "Задайте вопрос",
        company: "Организация",
        submitBtn: "Отправить",
        formSent: "Спасибо! Мы свяжемся с вами в течение нескольких дней",
        formError: "Произошла неизвестная ошибка сервера",
        formInvalid: "Пожалуйста, заполните все поля в нужном формате",
        directions: "Схема проезда",
        ihavereadandagreewith: "Подтверждаю, что ознакомлен и согласен с",
        privacypolicy: "политикой конфиденциальности",
        ofthiswebsite: "данного сайта",
        infoblock: "Главный офис",
        infoblockcontent1: "603109, Россия, Нижний Новгород, Ильинская, 48-10.",
        infoblockcontent2: "Тел/Факс +7 (831) 434-39-38,  +7 (831) 434-36-80",
        infoblockcontent3: "ooomaksnn@yandex.ru",
        infoblockcontent4: "Пункты отгрузок",
        infoblockcontent5: "Россия, Нижегородская область, Дзержинск, Восточное шоссе, 123Б",
        infoblockcontent6:
            "Дзержинск, территория Восточный промрайон, Автозаводское ш., 9, корп. 1",
    },
    en: {
        askquestion: "Ask us a question",
        company: "Company",
        submitBtn: "Submit",
        formSent: "Thank you! We'll contact you in several business days",
        formError: "Unknown server error. Please try again later",
        formInvalid: "Please, fill all fields correctly",
        directions: "Driving directions",
        ihavereadandagreewith: "I have read and agree with this website's ",
        privacypolicy: "privacy policy",
        ofthiswebsite: "",
        infoblock: "Head office",
        infoblockcontent1: "603109, Russia, Nizhniy Novgorod, Ilinskaya, 48-10.",
        infoblockcontent2: "Tel/Fax +7 (831) 434-39-38,  +7 (831) 434-36-80",
        infoblockcontent3: "ooomaksnn@yandex.ru",
        infoblockcontent4: "Shipping points",
        infoblockcontent5: "Russia, Nizhny Novgorod region, Dzerzhinsk, Eastern highway, 123B",
        infoblockcontent6:
            "Dzerzhinsk, Vostochny industrial area territory, Avtozavodskoe sh., 9, bldg. 1",
    },
};
