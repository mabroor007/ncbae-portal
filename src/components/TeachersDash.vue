<template>
  <div class="statsBox">
    <h1 class="stats">Stats</h1>
    <div class="dataBox">
      <div class="entry">
        <div class="title">Total Teachers</div>
        <div class="value">{{ state.totalTeachers }}</div>
      </div>
      <div class="entry">
        <div class="title">Permanent Teachers</div>
        <div class="value">{{ state.permanentTeachers }}</div>
      </div>
      <div class="entry">
        <div class="title">Visiting Teachers</div>
        <div class="value">{{ state.visitingTeachers }}</div>
      </div>
    </div>
    <div @click="$router.push({ name: 'AddTeacher' })" class="add">
      <div>Add Teacher</div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
const { ipcRenderer } = window.require("electron");

export default {
  setup() {
    const state = reactive({
      totalTeachers: 0,
      permanentTeachers: 0,
      visitingTeachers: 0,
    });

    onMounted(async () => {
      try {
        const { tResult, pResult, vResult } = await ipcRenderer.invoke(
          "getTeachersDashCount"
        );
        if (tResult && pResult && vResult) {
          state.totalTeachers = tResult[0].count;
          state.permanentTeachers = pResult[0].count;
          state.visitingTeachers = vResult[0].count;
        }
      } catch (error) {
        console.log(error);
      }
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
  background: rgb(52, 255, 97);
  background: linear-gradient(
    90deg,
    rgb(38, 226, 79) 0%,
    rgba(28, 228, 120, 1) 100%
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
  background: rgb(56, 184, 255);
  background: linear-gradient(
    90deg,
    rgba(56, 184, 255, 1) 0%,
    rgba(9, 33, 255, 1) 100%
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
