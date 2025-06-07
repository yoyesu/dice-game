import {router} from "./view-router.js";
import {NavComponent} from "./components/nav-component.js";
import {FooterComponent} from "./components/footer.js";

const { createApp } = Vue;

const app = createApp({});
app.use(router);
app.component('NavComponent', NavComponent);
app.component('FooterComponent', FooterComponent);
app.mount('#app');