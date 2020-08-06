import Vue from "vue";
import VueRouter from "vue-router";
import { routers } from "./router";
Vue.use(VueRouter);
// 路由配置
/* eslint-disable no-unused-vars */
console.log(process.env.NODE_ENV);
const RouterConfig = {
  // history 模式和 publicPath 冲突
  mode: process.env.NODE_ENV === "production" ? "hash" : "history",
  routes: routers
  // scrollBehavior(to, from, savedPosition) {
  //   return 期望滚动到哪个的位置;
  //   console.error(to, from, savedPosition);
  //   if (savedPosition) savedPosition;
  //   return { x: 0, y: 0 };
  // }
};
export const router = new VueRouter(RouterConfig);
