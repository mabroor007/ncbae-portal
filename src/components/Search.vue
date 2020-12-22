<template>
  <div>
    <form @submit.prevent="srchOnChange">
      <input
        @keyup="srchOnChange"
        v-model="state.searchText"
        id="search"
        placeholder="Search"
        type="search"
      />
      <select v-model="state.selected">
        <option value="Name">Name</option>
        <option value="Rollno">Rollno</option>
        <option value="CourseCode">Course code</option>
      </select>
    </form>
  </div>
</template>

<script>
import { reactive } from "vue";
const { ipcRenderer } = window.require("electron");

export default {
  props: {
    type: String,
  },
  setup(props, { emit }) {
    const state = reactive({
      selected: "Name",
      searchText: "",
    });

    const getSearchResults = async (text, pType, opt) => {
      try {
        const res = await ipcRenderer.invoke("search", { text, pType, opt });
        if (res.results) {
          emit("query-data", res.results);
        } else {
          console.log(res);
          emit("query-data", []);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const srchOnChange = () => {
      if (!state.searchText.length) return emit("query-data", null);
      getSearchResults(state.searchText, props.type, state.selected);
    };

    return { getSearchResults, state, srchOnChange };
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
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0085ff 0%, #48c4fa 100%);
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
