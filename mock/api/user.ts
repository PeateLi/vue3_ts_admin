import roles from "./menus";
const tokens: any = {
  "admin-token": {
    icon:
      "https://portrait.gitee.com/uploads/avatars/user/2660/7980619_wx_7c73acaa7c_1598404785.jpeg!avatar200",
    id: 3,
    menus: roles["admin"],
    roles: ["admin"],
    username: "admin",
  },
  "editor-token": {
    icon:
      "https://portrait.gitee.com/uploads/avatars/user/2660/7980619_wx_7c73acaa7c_1598404785.jpeg!avatar200",
    id: 3,
    menus: roles["ordinary"],
    roles: ["ordinary"],
    username: "ordinary",
  },
};
const users: any = {
  admin: {
    password: '123456',
    token: "admin-token",
    uid:'1528482644',
    auth:1
  },
  ordinary: {
    password: '456789',
    token: "editor-token",
    uid:'2096253299',
    auth:2
  },
  peate: {
    password: '666666',
    token: "peate-token",
    uid:'644220002',
    auth:3
  }
};
interface config{
  body: any;
  method: string;
  query: any;
}
function rand(min:number,max:number):number {
  return Math.floor(Math.random()*(max-min))+min;
}
const authCode = rand(1000,9999)+''
export default [
  {
    url: "admin/login",
    type: "post",
    response: (config: config) => {
      const index = Object.keys(users).indexOf(config.body.username);
      if(config.body.code === authCode){
        if (index !== -1) {
          if (config.body.password == users[config.body.username].password) {
            return {
              data: {
                token: users[config.body.username].token,
                uid:users[config.body.username].uid,
                username:config.body.username,
                state:'1',
                auth: users[config.body.username].auth,
              },
              code: 200,
            };
          } else {
            return {
              code: 502,
              state:'2',
              message: "密码错误",
            };
          }
        } else {
          return {
            code: 502,
            state:'2',
            message: "用户名错误",
          };
        }
      }else{
        return {
          code: 502,
          state:'2',
          message: "验证码错误",
        };
      }
      
    },
  },
  {
    url: "admin/info*",
    response: (config: config) => {
      return {
        code: 200,
        data: tokens[config.query.token],
        message: "操作成功",
      };
    },
  },
  {
    url:"admin/getCode",
    type: "post",
    response: (config: config) => {
      return {
        code: 200,
        data: authCode,
        message: "操作成功",
      };
    }
  },
];