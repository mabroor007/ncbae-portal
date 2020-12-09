<template>
  <div class="home win">
    <Connecting :load="state.loading" />
    <div class="main">
      <div class="navSect">
        <Nav v-bind:tchIsActive="true" />
      </div>
      <div class="studentSect">
        <h3>Hai i am studentSect</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import Connecting from "@/components/Connecting";
import Nav from "@/components/Nav";

export default {
  components: { Nav },
  setup() {
    const state = reactive({
      loading: false,
    });

    return {
      state,
      Connecting,
      Nav,
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
  /* background: blueviolet; */
}
.studentSect {
  background: burlywood;
}
</style>
