import type { VueElement } from "vue"
export interface RouteType {
  path: string
  name: string
  meta: {
    title: string
    transition?: string
  }
  component: () => Promise<any>
  children?: RouteType[]
}
