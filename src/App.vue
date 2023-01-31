<!--
 * @Author: oushiyibeizideshi
 * @LastEditors: oushiyibeizideshi
 * @Date: 2022-09-23 19:54:23
 * @LastEditTime: 2022-09-26 00:06:17
 * @Description: 
 * 
-->
<template>
  <el-config-provider>
    <router-view></router-view>
  </el-config-provider>
</template>
<script lang="ts" setup>
onMounted(() => {
  console.log("App mounted")
})
</script>
<style lang="scss">
@import url(@/assets/style/global.scss);
</style>
