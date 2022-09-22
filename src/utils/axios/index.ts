import axios, { AxiosInstance, AxiosRequestConfig } from "axios"

// 根据config生成axios实例
export const createAxiosByInterceptors = (
  config?: AxiosRequestConfig
): AxiosInstance => {
  const instance = axios.create({
    ...config
  })
  instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token: string = localStorage.getItem("token") ?? ""
      if (config.headers !== undefined) {
        config.headers.token = (config?.url ?? "").includes("/login")
          ? ""
          : token
      }

      console.log("axios config", config)
      return config
    },
    async (error: any) => {
      return await Promise.reject(error)
    }
  )
  return instance
}
