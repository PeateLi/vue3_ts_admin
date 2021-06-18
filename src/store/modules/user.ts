import { getUser } from '../../api/user';
import { filterAsyncRouter, toTree } from '../../utils/public-method';
import router from '../../router/index';
import { RouteRecordRaw } from 'vue-router';
interface roterType {
  hidden: number;
  icon: string;
  id: number;
  level: number;
  name: string;
  parentId: number;
  sort: number;
  title: string;
  redirect: string;
  path: string;
}
interface userInfoType {
  token: string;
  uid: string;
  username: string;
  auth: string;
}
interface userType {
  userInfo: userInfoType;
  menus: Array<roterType>;
}

const state: userType = {
  userInfo: {
    token: '',
    uid: '',
    username: '',
    auth: ''
  },
  menus: []
};

const mutations = {
  SET_INFO(state: userType, info: userInfoType) {
    state.userInfo = info;
    sessionStorage.setItem('uid', state.userInfo.uid);
  },
  async SET_MENUS(state: userType, info: userInfoType) {
    const { data } = await getUser({ token: info.token });
    state.menus = toTree(data.menus, 'id', 'parentId');
    console.log(state.menus);
    const getRouter = filterAsyncRouter(toTree(data.menus, 'id', 'parentId')); // 过滤路由
    getRouter.map((x: RouteRecordRaw) => {
      // 因为vue3去除了addRoutes 所以addRoute只能以对象的方式添加进去。
      router.addRoute(x);
    });
    console.log(router.getRoutes());
  },
  SET_ROUTE(state: userType) {
    const data_menus = JSON.stringify(state.menus);
    const getRouter = filterAsyncRouter(JSON.parse(data_menus)); // 过滤路由
    getRouter.map((x: RouteRecordRaw) => {
      // 因为vue3去除了addRoutes 所以addRoute只能以对象的方式添加进去。
      router.addRoute(x);
    });
    console.log(router.getRoutes());
  }
};

const actions = {
  async setUserInfo({ commit }: any, info: userInfoType) {
    await commit('SET_INFO', info);
    await commit('SET_MENUS', info);
  }
};

export default {
  state,
  actions,
  mutations
};
