import request from '@/utils/request'

export const doLogin = (user) => {
  return request.post("/user/login", {
    //这里是后端需要account字符，也就是用户名
    account: user.username,
    password: user.pass
  })
}
export const logout = () => {
  return request.post('/user/logout');
}

//创建用户接口
// export const createUser = ({ username, password, permission }) => {
//   return request.post('/permission/createUser', {
//     account: username,
//     password,
//     role_id: permission
//   })
// }

export const createUser = ({ username, password, permission }) => {
  return request({
    url: '/permission/createUser',
    method: 'POST',
    data: {
      account: username,
      password,
      role_id: permission
    },
  })
}

//获取用户接口
export const userList = () => {
  return request({
    url: '/user/list?type=new',
    method: 'get'
  })
}
/*
获取用户角色

在apis下的user.js

通过token来判断用户角色，所以必须要在登录之后调用
*/
export const userInfo = () => {
  return request.get("/user/info")
}