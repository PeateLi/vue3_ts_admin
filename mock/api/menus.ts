const roles = {
    admin: [
      {
        id: 1,
        path:'/blog',
        redirect:'/blog/list',
        component: 'Layout',
        name: "Blog",
        meta: {title: "博客管理", icon: "el-icon-house", requireAuth: true},
        parentId: 0,
      },
      {
        id: '1-1',
        name: "List",
        path:"list",
        parentId: 1,
        component: "Blog/list.vue",
        meta: { title: "博客列表", requireAuth: true },
      },
    ],
    ordinary: [
      {
        hidden: 0,
        icon: "vitedingdan",
        id: 1,
        level: 0,
        name: "oms",
        parentId: 0,
        sort: 0,
        title: "订单",
        path:"vitedingdan",
        redirect:'/vitedingdan'
      },
    ],
  };
  
  export default roles;