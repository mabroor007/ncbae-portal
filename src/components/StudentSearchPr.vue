<template>
  <div
    @click="
      $router.push({
        name: 'StudentDetail',
        params: { id: $props.student.id },
      })
    "
    class="card"
  >
    <div class="imgPart">
      <img class="img" :src="$props.student.profilePic" />
    </div>
    <div class="detailPart">
      <p class="name">
        {{ $props.student.name }} S/o {{ $props.student.father }}
      </p>
      <p class="course">{{ $props.student.course }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    student: Object,
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
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0085ff 0%, #48c4fa 100%);
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
.course {
  font-family: "Poppinsm";
  margin-top: -3px;
  font-size: 12px;
}
</style>
