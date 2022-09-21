import type { Router, RouteLocationNormalized } from "vue-router"

export function setupRouterGuard(router: Router): void {
  createPageGuard(router)
  // createPageLoadingGuard(router)
}
/**
 * Hooks for handling page state
 */
function createPageGuard(router: Router): void {
  const loadedPageMap = new Map<string, boolean>()

  // router.beforeEach(async (to: RouteLocationNormalized) => {
  //   return true
  // })

  router.afterEach((to: RouteLocationNormalized) => {
    loadedPageMap.set(to.path, true)
  })
}
