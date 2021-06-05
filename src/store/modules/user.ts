interface userType {
  userInfo:userInfoType
}
interface userInfoType {
  token: string,
  uid:string,
  username:string,
  auth: string,
  
}
const state: userType = {
  userInfo: {
    token:'',
    uid:'',
    username:'',
    auth:''
  },
};

const mutations = {
  SET_INFO(state:any,info:userInfoType){
    state.userInfo = info
    localStorage.setItem('uid',state.userInfo.uid)
  }
};

const actions = {
  async setUserInfo ({commit}:any, info:userInfoType) {
    await commit('SET_INFO',info)
  },
};

export default {
  state,
  actions,
  mutations,
};
