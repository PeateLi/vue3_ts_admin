import { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/Index.vue";
/**
 * constantRoutes
 * 没有权限要求的基本页面
 * 所有角色都可以访问
 */
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    redirect: "/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/Home.vue"),
        name: "index",
        meta: { title: "首页", icon: "el-icon-house", requireAuth: true },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () =>  import("@/views/Login.vue"),
    meta: { requireAuth: false },
  },
  
];
