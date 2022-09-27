<script lang="ts">
import { MailOutlined } from "@ant-design/icons-vue"
import { computed, toRefs } from "vue"
export default {
  name: "MySubMenu",
  setup(props: any) {
    const { menuList } = toRefs(props)
    const showDeepest = computed(() => {
      console.log("ssss", props.menuList)
      let result = false
      if (props.menuList !== undefined && props.menuList.length > 0) {
        if (props.menuList[0].children === undefined) {
          result = true
        }
      }
      return result
    })
    return {
      name,
      menuList,
      MailOutlined,
      showDeepest
    }
  }
}
</script>

<template>
  <template v-if="showDeepest">
    <a-menu-item :key="item.path" v-for="item in menuList">
      {{ item.meta.title }}
    </a-menu-item>
  </template>
  <template v-else>
    <a-sub-menu :key="item.name" v-for="item in menuList">
      <template #title>
        <MailOutlined />
        <span>{{ item.meta.title }} </span>
      </template>
      <my-sub-menu :menuList="item.children"></my-sub-menu>
    </a-sub-menu>
  </template>
</template>

<style lang="scss" scoped></style>
