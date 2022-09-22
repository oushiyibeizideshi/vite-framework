/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from "axios"
import type { MyResponse } from "./type"
import {
  handleNetworkError,
  handleAuthError,
  handleGeneralError
} from "./handleResError"

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
    async (error: AxiosError) => {
      return await Promise.reject(error)
    }
  )
  instance.interceptors.response.use(
    (response: MyResponse) => {
      console.log(response, response)
      handleAuthError(response.data.code as number)
      handleGeneralError(
        response.data.code as number,
        response.data.meessage as string
      )
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return response.data
    },
    (err: AxiosError) => {
      handleNetworkError(err.response?.status ?? 0)
    }
  )
  return instance
}
