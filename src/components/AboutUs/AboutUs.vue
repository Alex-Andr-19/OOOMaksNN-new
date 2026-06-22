<script setup lang="ts">
import { useContentStore } from "@/stores/content";
import type { i18nContentName, LocaleType } from "@/types/i18n";
import { computed, ref } from "vue";

type SectionId = "general" | "news" | "leader" | "development";

type NewsContent = {
    title: string;
    paragraphs: string[];
};

const contentStore = useContentStore();
const activeSection = ref<SectionId>("general");

const sections: { id: SectionId; label: i18nContentName }[] = [
    { id: "general", label: "generalInfoTitle" },
    { id: "news", label: "newsTitle" },
    { id: "leader", label: "leader" },
    { id: "development", label: "prodDev" },
];

const leaderLines: i18nContentName[] = [
    "leaderLine1",
    "leaderLine2",
    "leaderLine3",
    "leaderLine4",
    "leaderLine5",
];

const developmentLines: i18nContentName[] = [
    "productDev_1",
    "productDev_2",
    "productDev_3",
    "productDev_4",
    "productDev_5",
];

const newsContent: Record<LocaleType, NewsContent> = {
    ru: {
        title: "Одобрения от европейских производителей: присадка MAXOIL в масле ROSNEFT",
        paragraphs: [
            "В 2021 году один из основных потребителей присадок «МАКСОЙЛ» официально вышел на европейский рынок: гидравлическое масло производства «РОСНЕФТЬ» Rosneft Gidrotec HVLP 46 с вовлечением загущающей присадки «МАКСОЙЛ В4-02» получило одобрение от мирового лидера — производителя гидравлических насосов Bosch Rexroth.",
            "Это же масло с применением присадки «МАКСОЙЛ» получило официальное одобрение для использования в термопластавтоматах немецкого производства KraussMaffei.",
            "Получение OEM-одобрений от европейских компаний может по праву считаться большим достижением для российских производителей масел ввиду серьёзной конкуренции с европейскими производителями по качеству продукции и ценовому уровню.",
            "Присадки «МАКСОЙЛ» используются почти на всех НПЗ Российской Федерации, прочно заняв лидирующее место на отечественном рынке, а также поставляются иностранным компаниям.",
        ],
    },
    en: {
        title: "OEM approvals from European manufacturers: MAXOIL additives in ROSNEFT oil",
        paragraphs: [
            "In 2021 one of the major customers of MAX-NN officially entered the European market. Hydraulic oil Rosneft Gidrotec HVLP 46 produced by ROSNEFT with MAXOIL V4-02 viscosity modifier in its formulation was approved by Bosch Rexroth, the world's leading pump manufacturer.",
            "The same formulation gained official approval from KraussMaffei, a German manufacturer of machinery and systems for the production and processing of plastics and rubber.",
            "Obtaining OEM approvals from European companies is a major achievement for Russian manufacturers because of the highly competitive quality and pricing of European products.",
            "MAXOIL additives are used at practically all Russian refineries and are also supplied to other countries.",
        ],
    },
};

const currentNews = computed(() => newsContent[contentStore.locale]);

const interview = [
    {
        question:
            "Александр Алексеевич, как и когда началось ваше взаимодействие с зарубежными фирмами?",
        answer: [
            "Контакты с зарубежным бизнесом возникли во время перестройки, когда разработками «НИИ Полимеров» заинтересовалась известная южнокорейская корпорация «Самсунг». Для советских людей, в том числе и для руководителей предприятий, деловое общение с иностранцами было в новинку. Нам казалось, что корейские коллеги предложили очень выгодные условия: было не с чем сравнивать.",
            "В результате уникальная технология, над созданием которой трудились учёные трёх академий наук, ушла за границу за бесценок. По сути, мы стали для иностранцев поставщиком дешёвых инноваций. Наши работники, в том числе и я, выезжали в Корею, помогали налаживать производство. А когда вернулись — оказались в другой стране.",
        ],
    },
    {
        question:
            "Как вы, будучи научным сотрудником, человеком, далёким от бизнеса, отважились на создание собственного дела?",
        answer: [
            "Когда инфляция достигла почти 300% в год и цены в магазинах росли каждый день, а зарплата оставалась на уровне советского времени, возник вопрос, как жить дальше. Было понятно, что работа в государственном научном учреждении не имеет перспектив. Тогда мы стали предлагать свои разработки промышленным предприятиям для внедрения их в производство.",
            "Химико-технологическое образование и опыт работы пригодились при создании производственных цепочек для получения сырья, необходимого нефтеперерабатывающим предприятиям. Мы стали сотрудничать с крупнейшими компаниями, а затем создали собственное производство и занялись депрессорными и вязкостными присадками к маслам.",
        ],
    },
    {
        question: "На заре самостоятельного бизнеса вы работали с иностранными партнёрами?",
        answer: [
            "В конце 90-х годов мы стали сотрудничать с крупной американской фирмой Ethyl, одним из лидеров в производстве присадок к маслам и топливу. Они помогли нам в разработке присадок, предоставив свою научную лабораторию. Это позволило значительно повысить качество производимой продукции.",
            "Затем мы сотрудничали с немецкой компанией RohMax, входящей в концерн Evonik. Партнёрство было взаимовыгодным: мы продвигали их продукцию на российском рынке, а они поставляли нам сырьё для присадок.",
        ],
    },
    {
        question: "Как компания возродила производство депрессорных присадок?",
        answer: [
            "После перехода дзержинского предприятия в иностранную собственность производство было ликвидировано, технологическая линия демонтирована, а оборудование сдано в металлолом. Российский рынок рисковал оказаться в полной зависимости от зарубежных поставщиков.",
            "Наша компания приобрела опустошённую площадку, инвестировала средства в развитие предприятия, сохранила коллектив работников и наладила выпуск стратегически важных присадок.",
        ],
    },
    {
        question: "За счёт чего вы конкурируете с зарубежными производителями?",
        answer: [
            "Высокое качество нашей продукции подтверждено многими экспертами. Конкурентоспособную цену мы обеспечиваем не за счёт снижения зарплаты работников, а благодаря энергосбережению и инновационному подходу к технологиям.",
            "Мы постоянно работаем над снижением расхода сырья и расширением ассортимента, в том числе развиваем производство присадок для гидравлических и трансмиссионных масел.",
        ],
    },
    {
        question: "Что для вас особенно важно в работе и жизни?",
        answer: [
            "Вместе с женой мы создавали и семью, и бизнес, работали и отдыхали, построили дом, посадили деревья, воспитывали сына, а сейчас у нас уже трое внуков. Важно, чтобы рядом были люди, которые никогда не предадут.",
            "У нас прекрасная родина, и здесь есть возможности для реализации способностей. Если не стоять на месте, применять инновационные подходы, развиваться и делать добро, то успех обязательно придёт.",
        ],
    },
];

function showSection(section: SectionId) {
    activeSection.value = section;
}
</script>

<template>
    <section class="about-us">
        <h1 class="about-us__title MaksNN-text XL Bold">
            {{ contentStore.getLocaleText("aboutCompanyDropDown") }}
        </h1>

        <nav class="about-navigation" :aria-label="contentStore.getLocaleText('aboutUs')">
            <button
                v-for="section in sections"
                :key="section.id"
                class="about-navigation__item MaksNN-text M SemiBold"
                :class="{ active: activeSection === section.id }"
                type="button"
                role="tab"
                :aria-selected="activeSection === section.id"
                :aria-controls="`about-section-${section.id}`"
                @click="showSection(section.id)"
            >
                {{ contentStore.getLocaleText(section.label) }}
            </button>
        </nav>

        <div class="about-us__content">
            <article
                v-if="activeSection === 'general'"
                id="about-section-general"
                class="about-section"
                role="tabpanel"
            >
                <div class="about-hero">
                    <img src="/images/about-us/factory.webp" alt="" class="about-hero__image" />
                    <p class="about-hero__caption MaksNN-text L SemiBold">
                        {{ contentStore.getLocaleText("pvlTextOnImg") }}
                    </p>
                </div>

                <div class="general-info">
                    <p class="MaksNN-text M">
                        {{ contentStore.getLocaleText("generalInfo_1") }}
                    </p>
                    <p class="MaksNN-text M">
                        {{ contentStore.getLocaleText("generalInfo_2") }}
                        <button
                            v-if="contentStore.getLocaleText('generalInfo_2_name')"
                            class="leader-link"
                            type="button"
                            @click="showSection('leader')"
                        >
                            {{ contentStore.getLocaleText("generalInfo_2_name") }}
                        </button>
                        {{ contentStore.getLocaleText("generalInfo_2_1") }}
                    </p>
                    <p class="MaksNN-text M">
                        {{ contentStore.getLocaleText("generalInfo_3") }}
                    </p>
                </div>
            </article>

            <article
                v-else-if="activeSection === 'news'"
                id="about-section-news"
                class="about-section news"
                role="tabpanel"
            >
                <img
                    src="/images/about-us/rosneft.jpg"
                    :alt="currentNews.title"
                    class="news__image"
                />
                <div class="news__content">
                    <h2 class="news__title MaksNN-text XL SemiBold">
                        {{ currentNews.title }}
                    </h2>
                    <p
                        v-for="paragraph in currentNews.paragraphs"
                        :key="paragraph"
                        class="MaksNN-text M"
                    >
                        {{ paragraph }}
                    </p>
                </div>
            </article>

            <article
                v-else-if="activeSection === 'leader'"
                id="about-section-leader"
                class="about-section leader"
                role="tabpanel"
            >
                <div class="leader__profile">
                    <img
                        src="/images/about-us/leader.webp"
                        :alt="contentStore.getLocaleText('leaderLine1')"
                        class="leader__image"
                    />
                    <div class="leader__info">
                        <p
                            v-for="(line, index) in leaderLines"
                            :key="line"
                            class="MaksNN-text M"
                            :class="{ SemiBold: index === 0 }"
                        >
                            {{ contentStore.getLocaleText(line) }}
                        </p>
                    </div>
                </div>

                <div v-if="contentStore.locale === 'ru'" class="interview">
                    <p class="interview__intro MaksNN-text M">
                        Могут ли российские производители успешно состязаться с крупными западными
                        компаниями? Директор ООО «Макс-НН» Александр Долгополов получил ответы на
                        этот вопрос в результате собственной работы.
                    </p>
                    <h2 class="interview__title MaksNN-text XL Bold">
                        Александр Долгополов: как развить уникальное производство
                    </h2>

                    <div v-for="item in interview" :key="item.question" class="interview__item">
                        <h3 class="interview__question MaksNN-text M SemiBold">
                            {{ item.question }}
                        </h3>
                        <p
                            v-for="paragraph in item.answer"
                            :key="paragraph"
                            class="interview__answer MaksNN-text M"
                        >
                            {{ paragraph }}
                        </p>
                    </div>
                </div>
            </article>

            <article
                v-else
                id="about-section-development"
                class="about-section development"
                role="tabpanel"
            >
                <div class="about-hero about-hero--development">
                    <img src="/images/about-us/chemical.jpg" alt="" class="about-hero__image" />
                    <p class="about-hero__caption MaksNN-text L SemiBold">
                        {{ contentStore.getLocaleText("pvlTextOnImg") }}
                    </p>
                </div>

                <ol class="development__list">
                    <li
                        v-for="(line, index) in developmentLines"
                        :key="line"
                        class="development__item"
                    >
                        <span class="development__number MaksNN-text M Bold">
                            {{ index + 1 }}
                        </span>
                        <p class="MaksNN-text M">
                            {{ contentStore.getLocaleText(line) }}
                        </p>
                    </li>
                </ol>
            </article>
        </div>
    </section>
</template>

<style lang="scss" scoped src="./style.scss"></style>
