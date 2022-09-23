<template>
  <a-config-provider>
    <a-button type="primary">44444</a-button>
  </a-config-provider>
</template>
<script setup lang="ts">
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
