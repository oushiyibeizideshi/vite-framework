import { Component } from "vue"

const task = {
  path: "task",
  name: "task",
  meta: {
    title: "task"
  },
  children: [
    {
      path: "task-page-1",
      name: "task-page-1",
      component: async () => await import("@/views/task/task-page1/index.vue")
    }
  ]
}
export default task
