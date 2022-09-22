import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from "axios"

export type AuthErrorType = {
  [propName: number]: string
}
export type MyResponse = AxiosResponse & {
  data: {
    code: number
    [propName: string | number]: any
  }
}
