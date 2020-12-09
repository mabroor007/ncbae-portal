<template>
  <div>
    <form>
      <input id="search" placeholder="Search" type="search" />
      <div class="selbox">
        <select id="sel">
          <option value="name">By Name</option>
          <option value="roll">By Roll</option>
          <option value="course">By Course</option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>
// import { reactive } from "@vue/composition-api";

export default {
  setup() {
    // const state = reactive({});

    return {};
  },
};
</script>

<style scoped>
form {
  width: 100%;
  display: flex;
}
input#search {
  border: none;
  outline: none;
  font-size: 15px;
  font-family: "Poppins";
  padding: 12px 16px;
  border-radius: 10px;
  filter: drop-shadow(0 0 37px rgba(0, 0, 0, 0.253));
}
.selbox {
  background-color: #56cade;
}
#sel {
  border: none;
  background: none;
  border-radius: 10px;
  outline: none;
  font-family: "Poppins";
  appearance: none;
}
#sel option {
  border: none;
  outline: none;
}
</style>
