<script setup lang="ts">
import homeRoute from "@/router/routes/modules/home"
const selectedKeys = ref([])
const { children: menuRoutes } = homeRoute
</script>
<template>
  <div>
    <div class="logo" />
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <infinite-deep-menu :menuList="menuRoutes"></infinite-deep-menu>
    </a-menu>
  </div>
</template>
