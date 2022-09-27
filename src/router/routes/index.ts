/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { RouteType } from "../type"
// import.meta.glob() 直接引入所有的模块 Vite 独有的功能 ，不开eager要使用then,导致异步
const modules: any = import.meta.glob("./modules/**/*.ts", { eager: true })

const routeModuleList: RouteType[] = []
console.log("modules", modules)
// 加入到路由集合中
Object.keys(modules).forEach((key: string) => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const mod: any = modules[key].default || {}
  routeModuleList.push(...[mod])
})

// export const LoginRoute: RouteType = {
//   path: "/login",
//   name: "Login",
//   component: async () => await import("@/views/login/index.vue"),
//   meta: {
//     title: "login",
//     transition: "slide-right"
//   }
// }

// 根路由
export const RootRoute = {
  path: "/",
  name: "Root",
  redirect: "/home",
  meta: {
    title: "Root"
  }
}
// export const AllRoutes = [LoginRoute, RootRoute, ...routeModuleList]
export const AllRoutes = [RootRoute, ...routeModuleList]
