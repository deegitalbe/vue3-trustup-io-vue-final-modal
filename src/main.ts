import { createApp } from "vue";
import App from "./App.vue";
import { ModalPlugin } from "./lib";

const app = createApp(App);
app.use(ModalPlugin).mount("#app");
