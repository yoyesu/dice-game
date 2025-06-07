import {home} from "./main-view.js";

const routes = [
    { path: '/', component: home },
    // { path: '/about', component: About }
];

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});