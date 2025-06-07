import {home} from "./views/main-view.js";
import {ticTactToeView} from "./views/tic-tact-toe-view.js";
import {hangmanView} from "./views/hangman.js";
import {memoryView} from "./views/memory.js";

const routes = [
    { path: '/', component: home },
    { path: '/tic-tac-toe', component: ticTactToeView },
    { path: '/memory', component: memoryView },
    { path: '/hangman', component: hangmanView }
];

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});