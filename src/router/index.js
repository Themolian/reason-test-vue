import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/get-involved",
    name: "Get Involved",
    component: () =>
      import(/* webpackChunkName: "get-involved" */ "../views/GetInvolved.vue"),
  },
  {
    path: "/insights",
    name: "Insights",
    component: () =>
      import(/* webpackChunkName: "insights" */ "../views/Insights.vue"),
  },
  {
    path: "/our-network",
    name: "Our Network",
    component: () =>
      import(/* webpackChunkName: "our-network" */ "../views/OurNetwork.vue"),
  },
  {
    path: "/the-digital-divide",
    name: "The digital divide",
    component: () =>
      import(
        /* webpackChunkName: "the-digital-divide" */ "../views/DigitalDivide.vue"
      ),
  },
  {
    path: "/what-we-do",
    name: "What We Do",
    component: () =>
      import(/* webpackChunkName: "what-we-do" */ "../views/WhatWeDo.vue"),
  },
  {
    path: "/learn",
    name: "Learn",
    component: () =>
      import(/* webpackChunkName: "learn" */ "../views/Learn.vue"),
  },
  {
    path: "/donate",
    name: "Donate",
    component: () =>
      import(/* webpackChunkName: "donate" */ "../views/Donate.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
