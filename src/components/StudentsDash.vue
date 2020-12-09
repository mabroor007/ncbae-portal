<template>
  <div class="statsBox">
    <h1 class="stats">Stats</h1>
    <div class="dataBox">
      <div class="entry">
        <div class="title">Total Students</div>
        <div class="value">{{ state.totalStudents }}</div>
      </div>
      <div class="entry">
        <div class="title">Regular Students</div>
        <div class="value">{{ state.regularStudents }}</div>
      </div>
      <div class="entry">
        <div class="title">Weekend Students</div>
        <div class="value">{{ state.weekendStudents }}</div>
      </div>
    </div>
    <div @click="$router.push({ name: 'AddStudent' })" class="addStudent">
      <div>Add Student</div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      totalStudents: 0,
      regularStudents: 0,
      weekendStudents: 0,
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
  background: rgb(46, 155, 255);
  background: linear-gradient(
    90deg,
    rgba(46, 155, 255, 1) 0%,
    rgba(86, 202, 237, 1) 100%
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
div.addStudent {
  width: 450px;
  height: 160px;
  border-radius: 10px;
  margin-top: 15px;
  background: rgb(238, 166, 81);
  background: linear-gradient(
    90deg,
    rgba(238, 166, 81, 1) 0%,
    rgb(235, 227, 9) 100%
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
