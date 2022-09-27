<script setup lang="ts">
const selectedKeys = ref([])
type Props = {
  menuList: any[]
}
const props = defineProps<Props>()
console.log(props)
</script>

<template>
  <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
    <sub-menu :menuList="menuList"></sub-menu>
  </a-menu>
</template>

<style lang="scss" scoped></style>
