<!--
 * @Author: oushiyibeizideshi
 * @LastEditors: oushiyibeizideshi
 * @Date: 2022-09-23 19:54:23
 * @LastEditTime: 2022-09-25 19:13:38
 * @Description: 
 * 
-->
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
<style lang="less" scoped></style>
