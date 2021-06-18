import Layout from '@/layout/Index.vue';
export function toTree(data: any, pkey: string, ckey: string) {
  const cloneData = JSON.parse(JSON.stringify(data)); // 对源数据深度克隆
  const tree = cloneData.filter((father: any) => {
    // 循环所有项
    const branchArr = cloneData.filter((child: any) => {
      return father[pkey] === child[ckey]; // 返回每一项的子级数组
    });
    if (branchArr.length > 0) {
      father.children = branchArr; // 如果存在子级，则给父级添加一个children属性，并赋值
    }
    return father[ckey] === 0; // 返回第一层
  });
  return tree; // 返回树形数据
}
const _import = require('../router/_import_' + process.env.NODE_ENV + '.js'); // Layout 是架构组件，不在后台返回，在文件里单独引入

export function filterAsyncRouter(asyncRouterMap: any) {
  // 遍历后台传来的路由字符串，转换为组件对象
  const accessedRouters = asyncRouterMap.filter((route: any) => {
    console.log(route);
    if (route.component) {
      if (route.component === 'Layout') {
        // Layout组件特殊处理
        route.component = Layout;
      } else {
        route.component = _import(route.component);
      }
    }

    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children);
    }
    return true;
  });

  return accessedRouters;
}
