<template>
  <div>
    <form>
      <input id="search" placeholder="Search" type="search" />
      <select>
        <option>By Name</option>
        <option>By Rollno</option>
        <option>By Course</option>
      </select>
    </form>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({ selected: "By Name" });
    return { state };
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
  font-size: 13px;
  font-family: "Poppins";
  padding: 12px 16px;
  border-radius: 10px;
  filter: drop-shadow(0 0 37px rgba(0, 0, 0, 0.253));
  width: 450px;
}
select {
  outline: none;
  font-family: "Poppins";
  margin-left: 10px;
  border: none;
  width: 135px;
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: #56caed;
  color: white;
  background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 88%;
  background-position-y: 45%;
  border-radius: 10px;
  padding: 1rem;
  padding-right: 2rem;
  font-size: 13px;
  filter: drop-shadow(0 0 37px rgba(0, 0, 0, 0.253));
}
</style>
