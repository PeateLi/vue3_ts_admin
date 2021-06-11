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
  // {
  //   path:'/blog',
  //   redirect:'/blog/list',
  //   component: Layout,
  //   name: "Blog",
  //   meta: {title: "博客管理", icon: "el-icon-house", requireAuth: true},
  //   children:[
  //     {
  //       name: "List",
  //       path:"list",
  //       component: () => import("@/views/Blog/list.vue"),
  //       meta: { title: "博客列表", icon: "el-icon-house", requireAuth: true },
  //     },
  //   ]
  // },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
    meta: { requireAuth: false },
  },
];
