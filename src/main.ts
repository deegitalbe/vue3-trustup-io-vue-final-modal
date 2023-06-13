import { createApp } from "vue";
import App from "./App.vue";
import { modalPlugin } from "./lib";
import { createVfm } from "vue-final-modal";

const app = createApp(App);
app.use(modalPlugin, createVfm()).mount("#app");
