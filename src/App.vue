<template>
  <a-config-provider>
    <router-view></router-view>
  </a-config-provider>
</template>
<script lang="ts" setup>
import { ConfigProvider } from "ant-design-vue/es"

ConfigProvider.config({
  theme: {
    primaryColor: "skyblue",
    infoColor: "#1890ff",
    successColor: "#52c41a",
    // processingColor: string;
    errorColor: "#ff4d4f",
    warningColor: "#faad14"
  }
})
</script>
<style lang="less" scoped>
.body {
  background-color: pink;
}
</style>
