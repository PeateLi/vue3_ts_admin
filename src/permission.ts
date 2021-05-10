import router from "./router/index";
import { ElMessage } from "element-plus";

//路由拦截器
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (localStorage.getItem("uid")) {
      next();
    } else {
      ElMessage.warning({
        message: "还未登录！",
        type: "warning",
      });
      next({
        path: "/login",
      });
    }
  } else {
    next();
  }
});
