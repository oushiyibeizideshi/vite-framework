import { createApp } from "vue"
import { setupStore } from "@/store"
import { router, setupRouter } from "@/router"
import App from "@/App.vue"
import "ant-design-vue/dist/antd.variable.min.css"
import "@/assets/style/default.less"

const bootstrap = (): any => {
  const app = createApp(App)
  setupRouter(app)
  setupStore(app)
  app.mount("#app")
}
bootstrap()
