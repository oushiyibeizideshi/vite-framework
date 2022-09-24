<script setup lang="ts">
import LayoutHeader from "./LayoutHeader.vue"
import SideBar from "./SideBar.vue"

const collapsed = ref(false)
</script>
<template>
  <a-layout style="min-height: 100vh">
    <a-layout-header><layout-header></layout-header></a-layout-header>
    <a-layout>
      <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <side-bar></side-bar>
      </a-layout-sider>
      <a-layout-content>Content</a-layout-content>
    </a-layout>
  </a-layout>
</template>
<style scoped></style>
