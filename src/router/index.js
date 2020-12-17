import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import StudentsHome from "../views/StudentsHome.vue";
import TeachersHome from "../views/TeachersHome.vue";
import CoursesHome from "../views/CoursesHome.vue";
import AddStudent from "../views/AddStudent.vue";
import AddTeacher from "../views/AddTeacher.vue";
import AddCourse from "../views/AddCourse.vue";
import StudentDetail from "../views/StudentDetail.vue";
import TeacherDetail from "../views/TeacherDetail.vue";
import CourseDetail from "../views/CourseDetail.vue";

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
  {
    path: "/AddStudent",
    name: "AddStudent",
    component: AddStudent,
  },
  {
    path: "/AddTeacher",
    name: "AddTeacher",
    component: AddTeacher,
  },
  {
    path: "/AddCourse",
    name: "AddCourse",
    component: AddCourse,
  },
  {
    path: "/StudentDetail",
    name: "StudentDetail",
    component: StudentDetail,
  },
  {
    path: "/TeacherDetail",
    name: "TeacherDetail",
    component: TeacherDetail,
  },
  {
    path: "/CourseDetail",
    name: "CourseDetail",
    component: CourseDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
