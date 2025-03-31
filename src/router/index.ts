import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("@views/MainPage.vue"),
            meta: {
                title: "Главная",
            },
        },
        {
            path: "/about",
            name: "about",
            component: () => import("@views/AboutPage.vue"),
            meta: {
                title: "О компании",
            },
        },
        {
            path: "/products",
            name: "products",
            component: () => import("@views/ProductsPage.vue"),
            meta: {
                title: "Продукты",
            },
        },
        {
            path: "/contacts",
            name: "contacts",
            component: () => import("@views/ContactsPage.vue"),
            meta: {
                title: "Контакты",
            },
        },
    ],
});

router.beforeEach((to, from) => {
    const prevTitle = document.title.split(" – ");
    if (prevTitle.length === 2) {
        document.title = `${to.meta.title} – ${prevTitle[1]}`;
    } else {
        document.title = `${to.meta.title} – ${prevTitle[0]}`;
    }
});

export default router;
