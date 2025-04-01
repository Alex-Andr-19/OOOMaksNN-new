export type LocaleType = "ru" | "en";
export type i18nContentName =
    | "logoImg"
    | "phone"
    | "contacts"
    | "address"
    | "MainPage"
    | "aboutCompanyDropDown"
    | "aboutUs"
    | "aboutLeader"
    | "downloadPDF"
    | "products"
    | "homePageTitle"
    | "ooomaksnn"
    | "whatdoweoffer"
    | "maxoilproduction"
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
    | "infoblockcontent6"
    | "phone_1"
    | "phone_2"
    | "owndevelopments"
    | "additive"
    | "productionplace"
    | "newproductionplace"
    | "researchlab"
    | "newresearchlab"
    | "wdwo_1"
    | "wdwo_2"
    | "wdwo_3"
    | "pvlTextOnImg"
    | "generalInfoTitle"
    | "generalInfo_1"
    | "generalInfo_2"
    | "generalInfo_2_name"
    | "generalInfo_2_1"
    | "generalInfo_3"
    | "leader"
    | "leaderLine1"
    | "leaderLine2"
    | "leaderLine3"
    | "leaderLine4"
    | "leaderLine5"
    | "prodDev"
    | "productDev_1"
    | "productDev_2"
    | "productDev_3"
    | "productDev_4"
    | "productDev_5"
    | "newsTitle";

export type i18nContent = Record<LocaleType, Record<i18nContentName, string>> &
    Record<LocaleType, Record<"empty", undefined>>;

export const i18n: i18nContent = {
    ru: {
        empty: undefined,
        logoImg: "/images/slogan.svg",
        phone: "Телефон",
        contacts: "Контакты",
        address: "Адрес",
        MainPage: "Главная",
        aboutCompanyDropDown: "О компании",
        aboutUs: "О нас",
        aboutLeader: "Руководитель",
        downloadPDF: "Скачать каталог продукции МАКСОЙЛ®",
        products: "Продукты",
        homePageTitle: "Главная",
        ooomaksnn: "ООО Макс-НН",
        whatdoweoffer: "ЧТО МЫ ПРЕДЛАГАЕМ?",
        maxoilproduction: "ПРОДУКЦИЯ МАКСОЙЛ",
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
        phone_1: "+7 (831) 434-39-38",
        phone_2: "+7 (831) 434-36-80",
        owndevelopments: "Собственные разработки",
        additive: "Наше развитие",
        productionplace: "Производственная площадка",
        newproductionplace: "Новая производственная площадка",
        researchlab: "Научно-исследовательская лаборатория",
        newresearchlab: "Лаборатория на новом производстве",

        wdwo_1: "Высококачественные депрессорные и загущающие присадки к моторным, гидравлическим и трансмиссионным маслам.",
        wdwo_2: "Надежное партнерство, персональный подход к техническим требованиям каждого клиента.",
        wdwo_3: "Лояльные цены и широкие возможности по условиям поставки продуктов",

        pvlTextOnImg:
            "ООО «МАКС-НН» - крупнейший в России производитель депрессорных и загущающих присадок к моторным, гидравлическим и трансмиссионным маслам.",

        generalInfoTitle: "Общая информация",
        generalInfo_1:
            "Уже более 20 лет мы выпускаем продукцию под собственной торговой маркой МАКСОЙЛ . Присадка создавалась нами как присадка нового поколения, на уровне продуктов Infineum, Lubrizol, Evonik; она представляет собой вязкий концентрат полиметакрилата в минеральном масле селективной очистки.",
        generalInfo_2:
            "Производство присадок осуществляется в городе Дзержинск Нижегородской области, на территории ОАО “Дзержинское оргстекло”, где оно имеет уже более чем полувековую историю (подробнее о создании «МАКС-НН» вы можете узнать в интервью с директором компании, кандидатом химических наук, ",
        generalInfo_2_name: "А.А. Долгополовым",
        generalInfo_2_1: ").",
        generalInfo_3:
            "Собственная лаборатория, оснащенная современными приборами и аппаратурой, позволяет нам заниматься научными разработками с целью улучшения свойств существующих продуктов компании, а также создания новых. Присадки поставляются как внутри России, так и на экспорт. В компании внедрена система менеджмента качества ISO 9001:2015.",

        leader: "Руководитель",
        leaderLine1: "Александр Алексеевич Долгополов",
        leaderLine2: "Директор компании «Макс-НН».",
        leaderLine3:
            'Окончил химико-технологический факультет Горьковского политехнического института, работал в "НИИ Полимеров". Кандидат химических наук.',
        leaderLine4: "В 1994 году основал собственную научно-производственную фирму.",
        leaderLine5: "Женат, есть сын и трое внуков. Увлекается горными лыжами.",

        prodDev: "Развитие продукции",

        productDev_1:
            "В сентябре 2001 года запущено производство депрессорной присадки «Максойл Д марка Б» для моторных и трансмиссионных масел.",
        productDev_2:
            "В 2004 году начат выпуск присадок с более высоким содержанием полиметакрилата – «Максойл Д марка А» и «Максойл Д марка К». Повышенное содержание активного вещества в присадках позволяет улучшить технико-экономические показатели смазочных материалов при значительно меньших вовлечениях.",
        productDev_3:
            "С 2008 года налажено производство вязкостной присадки «Максойл В», представляющей из себя смесь полиметакрилата и этилен-пропиленового сополимера.",
        productDev_4:
            "В 2010 году завершены работы по разработке и внедрению в производство загущающих присадок для трансмиссионных и гидравлических масел - МАКСОЙЛ В2 и МАКСОЙЛ В3.",
        productDev_5:
            "В 2018-19 гг. запущены в производство новые виды загущающих присадок для гидравлических масел - «Максойл В4». Присадки предназначены для повышения вязкости и индекса вязкости низкозастывающих гидравлических масел. В серии «В4» предлагается несколько комбинаций свойств присадки в зависимости от требований потребителя к температурным показателям масла и его стойкости к деструкции.",

        newsTitle: "Новости",
    },
    en: {
        empty: undefined,
        logoImg: "/images/logo_en.png",
        phone: "Phone",
        contacts: "Contact Us",
        MainPage: "Home",
        askquestion: "Ask us a question",
        address: "Address",
        aboutCompanyDropDown: "About us",
        aboutUs: "The Company",
        aboutLeader: "Our Leader",
        downloadPDF: "Download the catalogue",
        products: "Products",
        homePageTitle: "Home",
        ooomaksnn: "OOO Maks-NN",
        whatdoweoffer: "WHAT DO WE OFFER?",
        maxoilproduction: "MAXOIL PRODUCTS",
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
        phone_1: "+7 (831) 434-39-38",
        phone_2: "+7 (831) 434-36-80",
        owndevelopments: "Own developments",
        additive: "Our development",
        productionplace: "Production place",
        newproductionplace: "New production place",
        researchlab: "Research laboratory",
        newresearchlab: "Laboratory in a new production",

        wdwo_1: "High-quality pour point depressants and viscosity modifiers for engine, gear and hydraulic oils",
        wdwo_2: "Strong partnership, an individual approach to the technical requirements of each customer",
        wdwo_3: "Affordable pricing, various terms of delivery of the products",

        pvlTextOnImg:
            "The leading manufacturer of pour point depressants and viscosity index improvers in Russia.\n",

        generalInfoTitle: "General Information",
        generalInfo_1:
            "For more than 20 years we have been manufacturing products under MAXOIL trademark. Our additives were designed as next-generation products, equal in quality to the additives of Infineum, Lubrizol and Evonik. Each additive is a viscous concentrate of polyalkylmethacrylate in solvent-reﬁned mineral oil.",
        generalInfo_2:
            "Our production site is located in Dzerzhinsk city of Nizhniy Novgorod region. It is based on the facility of “Dzerzhinsk Orgsteklo”, which is known for its half-century experience of oil additives production",
        generalInfo_2_name: "",
        generalInfo_2_1: ".",
        generalInfo_3:
            "Our own laboratory is provided with cutting-edge technologies, thus making possible the development of new products and perfection of the existing ones. The additives are vastly used on the Russian market and supplied for export.",

        leader: "Leader",
        leaderLine1: "Alexander A. Dolgopolov",
        leaderLine2:
            "Graduated from Nizhniy Novgorod State University, chemical-technical department. Worked in NII POLYMEROV. Holds a PhD in chemistry.",
        leaderLine3: "In 1994 he founded a research-and-production company.",
        leaderLine4: "Married, having a son and 3 grand-children",
        leaderLine5: "Fond of mountain skiing.",

        prodDev: "Production development",

        productDev_1:
            "In September 2001 production of MAXOIL D mark B additive for engine and gear oils was launched.",
        productDev_2:
            "2004 was a starting year for manufacturing additives with a higher content of methylmethacrylate - MAXOIL D mark A and MAXOIL D mark K. The increased level of active substance in the additives provides better technical and economic performance to lubricants at a lower input.",
        productDev_3:
            "In 2008 we started manufacturing a viscosity index improver MAXOIL V. It is a mixture of polymethacrylate and ethylene-propylene copolymer",
        productDev_4:
            "In 2010 we finished the development of new VIIs for gear and hydraulic oils MAXOIL V2 and MAXOIL V3. They joined the number of additives produced on an industrial scale.",
        productDev_5:
            "In 2018-2019 new kinds of viscosity modifiers for hydraulic oils were introduced for production – MAXOIL V4. These additives are designed to increase viscosity and the index of viscosity of lower-pour-point hydraulic oils. V4-range is represented by several types of additives with different properties which are available for customers depending on their requirements for temperature-connected characteristics and shear stability.",

        newsTitle: "News",
    },
};
