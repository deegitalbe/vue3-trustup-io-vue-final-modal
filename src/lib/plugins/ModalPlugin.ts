// import { createApp } from "vue";
import { createVfm } from "vue-final-modal";
import { Plugin } from "vue";
import "vue-final-modal/style.css";

const modalPlugin: Plugin = {
  install: (app) => {
    const vfm = createVfm();
    app.use(vfm);
  },
};

export default modalPlugin;
