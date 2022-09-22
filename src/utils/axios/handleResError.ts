import { AuthErrorType } from "./type"
// 网络错误
export const handleNetworkError = (errStatus: number): void => {
  const errStatusToMessage = new Map([
    [400, "错误的请求"],
    [401, "未授权，请重新登录"],
    [403, "拒绝访问"],
    [404, "未找到该资源"],
    [500, "服务器端出错"],
    [0, "未知错误"]
  ])
  const errorMessage =
    errStatusToMessage.get(errStatus) ?? errStatusToMessage.get(0)
  console.log(errorMessage)
}
// token错误
export const handleAuthError = (errno: number): boolean => {
  const authErrMap: AuthErrorType = {
    "10031": "登录失效，需要重新登录", // token 失效
    "10032": "您太久没登录，请重新登录~", // token 过期
    "10033": "账户未绑定角色，请联系管理员绑定角色",
    "10034": "该用户未注册，请联系管理员注册用户",
    "10035": "code 无法获取对应第三方平台用户",
    "10036": "该账户未关联员工，请联系管理员做关联",
    "10037": "账号已无效",
    "10038": "账号未找到"
  }

  if (Object.prototype.hasOwnProperty.call(authErrMap, errno)) {
    return false
  }

  return true
}
// 普通错误
export const handleGeneralError = (errno: number, errmsg: string): boolean => {
  if (errno !== 0) {
    // meessage.error(err.errmsg)
    return false
  }

  return true
}
