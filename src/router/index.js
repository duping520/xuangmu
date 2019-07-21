// 引入vue
import Vue from "vue";

// 引入vue-router
import VueRouter from "vue-router";

// 使用
Vue.use(VueRouter);

// 引入登录组件
import Login from "@/views/login.vue";

// 创建路由对象
var router = new VueRouter({
  // 添加路由的配置
  routes: [
    {
      name: "login",
      path: "/login",
      component: Login
    }
  ]
});
export default router;
