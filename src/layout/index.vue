<script setup lang="ts">
import LayoutHeader from "./LayoutHeader.vue"
</script>
<template>
  <div class="common-layout">
    <el-container>
      <header>
        <LayoutHeader />
      </header>
      <el-container>
        <el-aside width="200px">
          <div class="w-96 h-96 bg-red-700 text-red-500">aside</div>
        </el-aside>
        <el-main> <router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped></style>
