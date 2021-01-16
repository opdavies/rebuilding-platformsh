import Vue from "vue";
import AlertMessage from "@/components/alert-message.vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.component("AlertMessage", AlertMessage);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
