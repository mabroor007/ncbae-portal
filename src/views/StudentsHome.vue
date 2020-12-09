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
          <Search />
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

export default {
  setup() {
    const state = reactive({
      loading: false,
    });

    return {
      state,
      Connecting,
      Nav,
      Search,
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
  margin-right: 40px;
}
.studentSect {
  height: 87%;
  width: 70%;
}
h1 {
  font-family: "Poppins";
  color: #212121;
  font-size: 28px;
}
.searchSect {
  margin-top: 15px;
}
</style>
