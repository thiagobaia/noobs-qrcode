import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import '@/assets/css/tailwind.css'
import "font-awesome/css/font-awesome.css"
import VueQriously from "vue-qriously";

Vue.use(VueQriously);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
