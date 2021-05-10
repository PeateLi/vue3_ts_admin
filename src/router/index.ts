import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { constantRoutes } from "./model/constantRoutes";

const routes: Array<RouteRecordRaw> = [...constantRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;
