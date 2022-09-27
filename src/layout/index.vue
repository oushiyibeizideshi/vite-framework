<!--
 * @Author: oushiyibeizideshi
 * @LastEditors: oushiyibeizideshi
 * @Date: 2022-09-23 22:44:07
 * @LastEditTime: 2022-09-28 00:21:30
 * @Description:
 *
-->
<script setup lang="ts">
import LayoutHeader from "./LayoutHeader.vue"
import SideBar from "./SideBar.vue"
import { initialTheme } from "@/utils/theme"
onMounted(() => {
  initialTheme()
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
