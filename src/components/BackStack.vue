<template>
  <div class="stackPage">
    <div class="head">Back Stack</div>
    <div class="ops">
      <div :key="query.code" v-for="query in $props.queries">
        <Query :title="query.title" :code="query.code" />
      </div>
    </div>
  </div>
</template>

<script>
import Query from "@/components/Query";

export default {
  props: { queries: Array },
  setup() {
    return {
      Query,
    };
  },
};
</script>

<style scoped>
.stackPage {
  position: absolute;
  top: 0px;
  left: 0px;
  max-width: 95vw;
  height: 95vh;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  background-image: radial-gradient(
    circle farthest-corner at 22.4% 21.7%,
    rgba(4, 189, 228, 1) 0%,
    rgba(2, 83, 185, 1) 100.2%
  );

  filter: drop-shadow(0 0 37px rgba(0, 0, 0, 0.253));
}
.head {
  font-family: "Poppins";
  font-size: 1.5rem;
  color: white;
  margin-bottom: 10px;
  height: 5%;
}
.ops {
  height: 94%;
  overflow-y: scroll;
}
</style>
