<template>
  <div class="home win">
    <Connecting :load="state.loading" />
    <div class="main">
      <div class="navSect">
        <Nav v-bind:stdIsActive="true" />
      </div>
      <div class="studentSect">
        <h1>Students</h1>
        <div class="searchSect">
          <Search :type="$route.name" v-on:query-data="handleData" />
        </div>
        <div class="dashboard">
          <StudentsDash v-if="!state.searching" />
          <SearchResults
            :type="$route.name"
            :res="state.studentsSearchRes"
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
import StudentsDash from "@/components/StudentsDash";
import SearchResults from "@/components/SearchResults";

export default {
  components: { SearchResults },
  setup() {
    const state = reactive({
      loading: false,
      searching: false,
      studentsSearchRes: [],
    });

    const handleData = (data) => {
      if (!data) return (state.searching = false);
      state.searching = true;
      state.studentsSearchRes = data;
    };

    return {
      state,
      Connecting,
      Nav,
      Search,
      handleData,
      StudentsDash,
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
