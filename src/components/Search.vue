<template>
  <div>
    <form>
      <input id="search" placeholder="Search" type="search" />
    </form>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
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
  font-size: 15px;
  font-family: "Poppins";
  padding: 12px 16px;
  border-radius: 10px;
  filter: drop-shadow(0 0 37px rgba(0, 0, 0, 0.253));
}
</style>
