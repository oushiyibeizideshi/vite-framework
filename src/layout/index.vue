<script setup lang="ts">
import LayoutHeader from "./LayoutHeader.vue"
import LayoutSiderMenu from "./LayoutSiderMenu.vue"
import LayoutBreadcrumb from "./LayoutBreadcrumb.vue"
</script>
<template>
  <div class="common-layout">
    <main>
      <header style="height: 58px">
        <LayoutHeader />
      </header>
      <div class="w-full flex" style="height: calc(100vh - 58px)">
        <aside class="h-full">
          <LayoutSiderMenu />
        </aside>

        <content class="w-full h-full">
          <LayoutBreadcrumb />
          <router-view />
        </content>
      </div>
    </main>
  </div>
</template>
