import { createApp, Component } from "vue"
import { setupStore } from "@/store"
import { router, setupRouter } from "@/router"
import "@/assets/style/default.css"
import App from "@/App.vue"

const bootstrap = (): void => {
  const app = createApp(App as Component)
  setupRouter(app)
  setupStore(app)
  app.mount("#app")
}
bootstrap()
