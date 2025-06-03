import Vue from "vue";
import App from "./App.vue";
import VxeUIAll from "vxe-pc-ui";
import "vxe-pc-ui/lib/style.css";
import VxeUITable from "vxe-table";
import "vxe-table/lib/style.css";

Vue.config.productionTip = false;

Vue.use(VxeUIAll);
Vue.use(VxeUITable);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
