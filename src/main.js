import Vue from "vue";
import App from "./App.vue";
import "./../node_modules/bulma/css/bulma.css";
import "font-awesome/css/font-awesome.min.css";

import PrettyCheck from "pretty-checkbox-vue/check";
import "pretty-checkbox/src/pretty-checkbox.scss";

Vue.component("p-check", PrettyCheck);

Vue.component("InputBox", require("./components/Input.vue").default);

Vue.config.productionTip = false;
Vue.config.lintOnSave = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
