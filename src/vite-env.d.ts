/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@vue' {
  export interface GlobalComponents {
    AConfigProvider: typeof import('ant-design-vue/es')['ConfigProvider']
    ALayout: typeof import('ant-design-vue/es')['Layout']
    ALayoutContent: typeof import('ant-design-vue/es')['LayoutContent']
    ALayoutFooter: typeof import('ant-design-vue/es')['LayoutFooter']
    ALayoutHeader: typeof import('ant-design-vue/es')['LayoutHeader']
    ALayoutSider: typeof import('ant-design-vue/es')['LayoutSider']
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
  }
}
