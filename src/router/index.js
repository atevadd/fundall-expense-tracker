import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "@/views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import PageNotFound from "../views/PageNotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Fundall - Home",
    },
  },
  {
    path: "/auth/signup",
    name: "Signup",
    component: Signup,
    meta: {
      title: "Fundall - Signup",
    },
  },
  {
    path: "/login",
    redirect: "/auth/login",
  },
  {
    path: "/auth/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Fundall - Login",
    },
  },
  {
    path: "/user/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      title: "Fundall - Dashboard",
    },
  },
  // catch all pages not found
  {
    path: "*",
    redirect: "/404",
  },
  // 404 page
  {
    path: "/404",
    name: "PageNotFound",
    component: PageNotFound,
    meta: {
      title: "Page not found",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
