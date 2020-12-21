<template>
  <div class="query">
    <div class="title">{{ $props.title }}</div>
    <div class="code">{{ $props.code }}</div>
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
  margin-bottom: 5px;
}
.title {
  font-family: "Poppins";
  font-size: 1.3rem;
  margin-bottom: 5px;
}
.code {
  font-family: "Poppinsm";
  font-size: 13px;
}
</style>
