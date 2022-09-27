// import type { RouteRecordRaw } from "vue-router"
import type { App } from "vue"

import { createRouter, createWebHashHistory } from "vue-router"
import { AllRoutes } from "./routes"
console.log("AllRoutes", AllRoutes)

export const router = createRouter({
  // 创建一个 hash 历史记录。
  history: createWebHashHistory(),
  // 应该添加到路由的初始路由列表。
  routes: AllRoutes
})

export const setupRouter = (app: App<Element>): void => {
  app.use(router)
}
