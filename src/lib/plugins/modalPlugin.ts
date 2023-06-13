// import { createApp } from "vue";
import { Vfm } from "vue-final-modal";
import { Plugin } from "vue";
import "vue-final-modal/style.css";

const modalPlugin: Plugin<Vfm> = {
  install: (app, vfm) => {
    app.use(vfm);
  },
};

export default modalPlugin;
