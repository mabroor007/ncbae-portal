import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import StudentsHome from "../views/StudentsHome.vue";
import TeachersHome from "../views/TeachersHome.vue";
import CoursesHome from "../views/CoursesHome.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/StudentsHome",
    name: "StudentsHome",
    component: StudentsHome,
  },
  {
    path: "/TeachersHome",
    name: "TeachersHome",
    component: TeachersHome,
  },
  {
    path: "/CoursesHome",
    name: "CoursesHome",
    component: CoursesHome,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
