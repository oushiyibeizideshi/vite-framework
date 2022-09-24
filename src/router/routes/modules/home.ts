const home = {
  path: "/home",
  name: "home",
  component: async () => await import("@/layout/index.vue"),
  meta: {
    title: "home"
  }
}
export default home
