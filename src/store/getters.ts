const getters = {
  getToken: (state: any) => {
    return state.user.token;
  },
  getMenus: (state: any) => {
    return state.user.menus;
  }
};

export default getters;
