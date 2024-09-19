import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import svgPlugin from "./plugins/svgPlugin";

import App from './App.vue'
import router from './router'

(async () => {
    try {
  
    //   await i18Service.init();
      const app = createApp(App);
  
      // Libraries
      app.use(createPinia());
  
      app.use(router);
  
    //   app.use(vue3GoogleLogin, {
    //     clientId: import.meta.env.VITE_G_CLIENT_ID
  
    //   })
      // Plugins
    //   app.use(i18nPlugin);
      app.use(svgPlugin);
    //   app.use(errorPlugin);
  
      app.mount("#app");
    } catch (error) {
      console.error("Failed to init app", error);
  
    }
  })();