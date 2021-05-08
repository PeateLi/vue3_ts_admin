import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "../layout/Index.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    redirect: "/index",
    children: [
      {
        path: "index",
        component: () => import("../views/Home.vue"),
        name: "index",
        meta: { title: "首页", icon: "el-icon-house", affix: true },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
