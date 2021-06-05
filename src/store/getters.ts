const getters = {
  getToken: (state: any) => {
    return state.user.vToken;
  },
  getMenus: (state: any) => {
    return state.user.menus;
  },
};

export default getters;
