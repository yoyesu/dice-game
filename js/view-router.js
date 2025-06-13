import {home} from "./views/main-view.js";
import {ticTactToeView} from "./views/tic-tact-toe-view.js";
import {hangmanView} from "./views/hangman.js";
import {contactView} from "./views/contact.js";
import {loginView} from "./views/login-form.js";
import {signupView} from "./views/signup-form.js";
import {memoryView} from "./views/memory-view.js";

const routes = [
    { path: '/', component: home },
    { path: '/tic-tac-toe', component: ticTactToeView },
    { path: '/memory', component: memoryView },
    { path: '/hangman', component: hangmanView },
    { path: '/contact', component: contactView },
    { path: '/login', component: loginView },
    { path: '/signup', component: signupView },

];

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});