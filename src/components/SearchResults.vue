<template>
  <div class="resBox">
    <h1>Results</h1>
    <div class="res">
      <div v-if="$props.type === 'StudentsHome'" class="students">
        <div :key="student.id" v-for="student in $props.res">
          <StudentSearchPr :student="student" />
        </div>
      </div>
      <div v-if="$props.type === 'TeachersHome'" class="teachers">
        <div :key="teacher.id" v-for="teacher in $props.res">
          <TeacherSearchPr :teacher="teacher" />
        </div>
      </div>
      <div v-if="$props.type === 'CoursesHome'" class="courses">
        <div :key="course.id" v-for="course in $props.res">
          <CourseSearchPr :course="course" />
        </div>
      </div>
    </div>
    <div class="scrollOver"></div>
  </div>
</template>

<script>
import StudentSearchPr from "@/components/StudentSearchPr";
import TeacherSearchPr from "@/components/TeacherSearchPr";
import CourseSearchPr from "@/components/CourseSearchPr";

export default {
  components: { StudentSearchPr },
  props: {
    res: Array,
    type: String,
  },
  setup() {
    return {
      StudentSearchPr,
      TeacherSearchPr,
      CourseSearchPr,
    };
  },
};
</script>

<style scoped>
.resBox {
  width: 450px;
  height: 400px;
  position: relative;
}

h1 {
  font-family: "Poppins";
  color: #212121;
  font-size: 28px;
  margin-top: 25px;
}
.res {
  margin-top: 15px;
  height: 85%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 10px;
}
.scrollOver {
  position: absolute;
  width: 100%;
  height: 50px;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(0deg, #ffffff 0%, #ffffff00 99%);
}
</style>
