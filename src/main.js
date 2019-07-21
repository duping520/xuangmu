import Vue from "vue";
import App from "./App.vue";
//引入element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

//引入公共样式
import "@/styles/index.less";

// 引入router
import router from "@/router/index.js";

//使用element-ui
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
