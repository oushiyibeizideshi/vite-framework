const home = {
  path: "/home",
  name: "home",

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  component: async () => await import("@/layout/index.vue"),
  meta: {
    title: "home"
  },
  children: [
    // {
    //   path: "menu1",
    //   name: "menu1",
    //   component: async () => await import("@/views/menu1/index.vue"),
    //   meta: {
    //     title: "menu1"
    //   },
    //   children: [
    //     {
    //       path: "menu1-1",
    //       name: "menu1-1",
    //       component: async () => await import("@/views/menu1-1/index.vue"),
    //       meta: {
    //         title: "menu1-1"
    //       }
    //     }
    //   ]
    // },
    // {
    //   path: "menu2",
    //   name: "menu2",
    //   component: async () => await import("@/views/menu2/index.vue"),
    //   meta: {
    //     title: "menu2"
    //   }
    // }
  ]
}
export default home
