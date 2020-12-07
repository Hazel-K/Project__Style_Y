import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
// reset.css, npm i normalize.css
import "normalize.css";
// 주소찾기, npm i vue-daum-postcode
import VueDaumPostcode from "vue-daum-postcode";

Vue.use(VueDaumPostcode);
Vue.config.productionTip = false;

export const eventBus = new Vue();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
