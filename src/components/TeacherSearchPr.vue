<template>
  <div
    @click="
      $router.push({
        name: 'TeacherDetail',
        params: { id: $props.teacher.id },
      })
    "
    class="card"
  >
    <div class="imgPart">
      <img class="img" :src="$props.teacher.profilePic" />
    </div>
    <div class="detailPart">
      <p class="name">
        {{ $props.teacher.name }}
      </p>
      <p class="qual">{{ $props.teacher.qualification }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    teacher: Object,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  height: 70px;
  margin: 0 5px;
  display: flex;
  align-items: center;
  background: rgb(52, 255, 97);
  background: linear-gradient(
    90deg,
    rgb(38, 226, 79) 0%,
    rgba(28, 228, 120, 1) 100%
  );
  border-radius: 9px;
  overflow: hidden;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
}

.imgPart {
  width: 70px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img {
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  object-fit: cover;
}
.detailPart {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.name {
  font-family: "Poppins";
  margin-top: 0px;
}
.qual {
  font-family: "Poppinsm";
  margin-top: -3px;
  font-size: 12px;
}
</style>
