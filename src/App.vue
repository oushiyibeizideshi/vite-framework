<template>
  <div></div>
</template>
<script setup lang="ts">
import { onMounted } from "vue"
import axios from "axios"
import { request } from "@/utils/axios"
onMounted(() => {
  console.log("onMounted")

  request({
    url: "/user/112",
    method: "GET"
  })
  axios({
    url: "http://127.0.0.1:3000/user/112",
    method: "get"
  })
})
</script>
<style scoped></style>
