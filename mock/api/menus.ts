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
      
    ],
  };
  
  export default roles;