import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
// https://github.com/antfu/unplugin-auto-import
/**
 * 不用自己引入ref,onMounted等
 */
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"

// https://juejin.cn/post/7039879176534360077
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      imports: [
        // presets
        "vue",
        "vue-router"
      ],
      dts: "./config/auto-imports.d.ts",
      eslintrc: {
        enabled: true,
        filepath: "./config/.eslintrc-auto-import.json"
      }
    }),
    Components({
      dts: "./config/components.d.ts",
      resolvers: [AntDesignVueResolver()]
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
        target: "http://192.168.1.99:3021/tzjymobile",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, "")
      }
    }
  }
})
