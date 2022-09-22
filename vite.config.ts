import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
// element-plus自动导入
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

// https://juejin.cn/post/7039879176534360077
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ], // 配置项目别名
  resolve: {
    alias: [
      {
        find: "@", // 别名
        replacement: resolve(__dirname, "src") // 别名对应地址
      }
    ]
  },
  server: {
    host: "localhost",
    // https: false, // 是否启用 http 2
    cors: true, // 为开发服务器配置 CORS , 默认启用并允许任何源
    // open: true, // 服务启动时自动在浏览器中打开应用
    port: 5174,
    // strictPort: false, // 设为true时端口被占用则直接退出，不会尝试下一个可用端口
    // force: true, // 是否强制依赖预构建
    // hmr: false, // 禁用或配置 HMR 连接
    // // 传递给 chockidar 的文件系统监视器选项
    // watch: {
    //   ignored: ["!**/node_modules/your-package-name/**"]
    // },
    // 反向代理配置
    proxy: {
      "/api": {
        target: "https://127.0.0.1:3000",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, "")
      }
    }
  }
})
