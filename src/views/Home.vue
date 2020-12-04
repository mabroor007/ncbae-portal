<template>
  <div class="home win">
    <Connecting :load="!state.dbConnected" />
  </div>
</template>

<script>
import { reactive } from "vue";
import Connecting from "@/components/Connecting";

export default {
  setup() {
    const state = reactive({
      dbConnected: false,
    });
    const setCon = () => {
      state.dbConnected = true;
    };
    setTimeout(() => {
      state.dbConnected = true;
    }, 5000);
    return {
      state,
      setCon,
      Connecting,
    };
  },
};
</script>

<style scoped></style>
