import Vue from "vue";
import VueRouter from "vue-router";
//使用路由插件
Vue.use(VueRouter);
//引入路由组件
import Home from "@/pages/Home/Index";
import Login from "@/pages/Login/Index";
import Search from "@/pages/Search/Index";
import Register from "@/pages/Register/Index";

export default new VueRouter({
  routes: [
    {
      path: "*",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/search",
      component: Search,
    },
  ],
});
