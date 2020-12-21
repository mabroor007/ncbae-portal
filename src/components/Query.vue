<template>
  <div class="query">
    <div class="title">{{ $props.title }}</div>
    <pre v-highlightjs="$props.code"><code class="SQL"></code></pre>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    code: String,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.query {
  padding: 15px;
  border-radius: 10px;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(249, 248, 113, 1) 0%,
    rgba(240, 221, 254, 1) 90%
  );
  color: #333;
  margin-bottom: 15px;
}
.title {
  font-family: "Poppins";
  font-size: 1.3rem;
  margin-bottom: 5px;
}
.code {
  font-family: "Poppins";
}
</style>
