import { createApp } from "vue"
import store from "@/store"
import { router } from "@/router"
import App from "@/App.vue"
import "ant-design-vue/dist/antd.variable.min.css"
const app = createApp(App)
app.use(router).use(store).mount("#app")
