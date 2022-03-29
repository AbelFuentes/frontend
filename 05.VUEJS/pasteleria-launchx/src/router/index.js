import { createRouter, createWebHashHistory } from "vue-router";
import ClientView from "../views/ClientView.vue";

const routes = [
  {
    path: "/",
    name: "client",
    component: ClientView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/permissions",
    name: "permissions",
    component: () => import("../views/ConfigurationView.vue"),
  },
  {
    path: "/administrator",
    name: "administrator",
    component: () => import("../views/AdministratorView.vue"),
  },
  {
    path: "/request",
    name: "request",
    component: () => import("../views/RequestView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
