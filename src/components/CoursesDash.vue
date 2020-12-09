<template>
  <div class="statsBox">
    <h1 class="stats">Stats</h1>
    <div class="dataBox">
      <div class="entry">
        <div class="title">Total Courses</div>
        <div class="value">{{ state.totalCourses }}</div>
      </div>
      <div class="entry">
        <div class="title">Regular Courses</div>
        <div class="value">{{ state.regularCourses }}</div>
      </div>
      <div class="entry">
        <div class="title">Weekend Courses</div>
        <div class="value">{{ state.weekendCourses }}</div>
      </div>
    </div>
    <div @click="$router.push({ name: 'AddTeacher' })" class="add">
      <div>Add Courses</div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      totalCourses: 0,
      regularCourses: 0,
      weekendCourses: 0,
    });

    return {
      state,
    };
  },
};
</script>

<style scoped>
.statsBox {
  width: 100%;
}
h1 {
  font-family: "Poppins";
  color: #212121;
  font-size: 28px;
  margin-top: 25px;
}
.dataBox {
  width: 450px;
  height: 160px;
  background: rgb(135, 87, 237);
  background: linear-gradient(
    90deg,
    rgba(135, 87, 237, 1) 0%,
    rgba(77, 81, 255, 1) 100%
  );
  color: white;
  font-family: "Poppinsm";
  font-weight: medium;
  padding: 1rem 2rem;
  border-radius: 10px;
  margin-top: 15px;
  filter: drop-shadow(0 0 37px rgba(0, 0, 0, 0.253));

  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.entry {
  display: flex;
  justify-content: space-between;
}
div.add {
  width: 450px;
  height: 160px;
  border-radius: 10px;
  margin-top: 15px;
  background: rgb(50, 157, 255);
  background: linear-gradient(
    90deg,
    rgba(50, 157, 255, 1) 0%,
    rgba(69, 255, 65, 1) 100%
  );
  font-family: "Poppinsb";
  color: white;
  font-size: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  filter: drop-shadow(0 0 37px rgba(0, 0, 0, 0.253));
}
</style>
