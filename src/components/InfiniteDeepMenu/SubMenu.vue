<script lang="ts">
export default {
  name: "MySubMenu"
}
</script>
<script setup lang="ts">
type Props = {
  menuList: any[]
}

const props = defineProps<Props>()
console.log("55555555", props.menuList)
</script>

<template>
  <div v-for="item in menuList" :key="item.path">
    <div :key="item.path" v-if="!item.children?.length">
      <a-menu-item :key="item.path">
        {{ item.meta.title }}
      </a-menu-item>
    </div>
    <div v-else :key="item.meta.title">
      <a-sub-menu :key="item.path">
        <template #title>
          <span>{{ item.meta.title }} </span>
        </template>
        <my-sub-menu :menuList="item.children"></my-sub-menu>
      </a-sub-menu>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
