import { createApp } from "vue";
import App from "./App.vue";
import { modalPlugin } from "./lib";

const app = createApp(App);
app.use(modalPlugin).mount("#app");
