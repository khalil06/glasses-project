import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Glasses from "../views/Glasses.vue";

// import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/items", name: "Items", component: Glasses },
    { path: "/about", name: "About", component: About },
  ],
});
export default router;
