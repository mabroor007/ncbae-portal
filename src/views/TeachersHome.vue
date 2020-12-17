<template>
  <div class="home win">
    <Connecting :load="state.loading" />
    <div class="main">
      <div class="navSect">
        <Nav v-bind:tchIsActive="true" />
      </div>
      <div>
        <h1>Teachers</h1>
        <div class="searchSect">
          <Search :type="$route.name" v-on:query-data="handleData" />
        </div>
        <div class="dashboard">
          <TeachersDash v-if="!state.searching" />
          <SearchResults
            :type="$route.name"
            :res="state.teacherSearchRes"
            v-if="state.searching"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import Connecting from "@/components/Connecting";
import Nav from "@/components/Nav";
import Search from "@/components/Search";
import TeachersDash from "@/components/TeachersDash";
import SearchResults from "@/components/SearchResults";

export default {
  setup() {
    const state = reactive({
      loading: false,
      searching: false,
      teacherSearchRes: [],
    });

    const handleData = (data) => {
      if (!data) return (state.searching = false);
      state.searching = true;
      state.teacherSearchRes = data;
    };

    return {
      state,
      Connecting,
      Nav,
      Search,
      handleData,
      TeachersDash,
      SearchResults,
    };
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navSect {
  height: 87%;
  margin-right: 60px;
}

h1 {
  font-family: "Poppins";
  color: #212121;
  font-size: 28px;
}
.searchSect {
  margin-top: 15px;
}
.dashboard {
  width: 100%;
  height: 400px;
}
</style>
