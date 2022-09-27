import type { VueElement } from "vue"
export interface RouteType {
  path: string
  name: string
  meta: {
    title: string
    transition?: string
    [key: string]: any
  }
  component: () => Promise<any>
  children?: RouteType[]
}
