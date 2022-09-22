import { createAxiosByInterceptors } from "./createMyAxios"

export const request = createAxiosByInterceptors({
  baseURL: "/api"
})
