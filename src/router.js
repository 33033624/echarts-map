import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/cities",
      name: "cities",
      meta: { title: "地市" },
      component: () =>
        import(/* webpackChunkName: "cities" */ "./views/cities/app.vue")
    },
    {
      path: "/counties",
      name: "counties",
      meta: { title: "县区" },
      component: () =>
        import(/* webpackChunkName: "cities" */ "./views/counties/app.vue")
    }
  ]
});

export { router };
