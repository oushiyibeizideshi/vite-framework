<!--
 * @Author: oushiyibeizideshi
 * @LastEditors: oushiyibeizideshi
 * @Date: 2022-09-23 22:44:07
 * @LastEditTime: 2022-09-25 20:26:06
 * @Description:
 *
-->
<script setup lang="ts">
import LayoutHeader from "./LayoutHeader.vue"
import SideBar from "./SideBar.vue"
import { initialTheme } from "@/utils/theme"
onMounted(() => {
  setTimeout(() => {
    initialTheme()
  }, 3000)
})

const collapsed = ref(false)
</script>
<template>
  <a-layout style="min-height: 100vh">
    <a-layout-header><layout-header></layout-header></a-layout-header>
    <a-layout>
      <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <side-bar></side-bar>
      </a-layout-sider>
      <a-layout-content>
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<style scoped>
.box {
  width: 40px;
  height: 40px;
  background-color: var(--ant-primary-color);
  user-select: none;
}
</style>
