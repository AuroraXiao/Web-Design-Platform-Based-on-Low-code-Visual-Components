import { createApp } from "vue";
import ElementPlus from "element-plus";
import {
  QuestionFilled,
  CirclePlus,
  DocumentCopy,
  Delete,
  Refresh,
  Minus,
} from "@element-plus/icons-vue";
import "element-plus/dist/index.css";

import APP from "./App.vue";
import { Locale } from 'vant';
import loadCompontents from "@/libs/UIComponentInit.js";
import enUS from 'vant/es/locale/lang/en-US';

Locale.use('en-US', enUS);


// Vue.use(ElementPlus, { locale:'en' });

/**
 * @param {*} renderComponent
 * @param {*} loadFinished
 * @returns
 */
function loadTemplate(renderComponent, loadFinished = () => {}) {
  const app = createApp(renderComponent);
  app.use(ElementPlus);
  loadCompontents().then((modules) => {
    for (let index = 0; index < modules.length; index++) {
      const module = modules[index];
      app.use(module);
      loadFinished(app);
    }
  });
  return app;
}

/**
 * @param {*} renderComponent
 * @returns
 */
function createBaseAppSync(renderComponent = {}) {
  return loadTemplate(renderComponent);
}

/**
 * @param {*} renderComponent
 * @returns
 */
function createBaseAppAsync(renderComponent = {}) {
  return new Promise((resolve, reject) => {
    loadTemplate(renderComponent, (app) => {
      resolve(app);
    });
  });
}

const app = createBaseAppSync(APP);

app.component("question-filled", QuestionFilled);
app.component("circle-plus", CirclePlus);
app.component("l-refresh", Refresh);
app.component("l-delete", Delete);
app.component("document-copy", DocumentCopy);
app.component("l-minus", Minus);
app.mount("#app");

self.createBaseAppAsync = createBaseAppAsync;
