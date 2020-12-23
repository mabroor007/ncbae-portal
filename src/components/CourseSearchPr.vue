<template>
  <div
    @click="
      $router.push({
        name: 'CourseDetail',
        params: { id: $props.course.id },
      })
    "
    class="card"
  >
    <div class="imgPart">
      <img class="img" src="../assets/course.svg" />
    </div>
    <div class="detailPart">
      <p class="name">
        {{ $props.course.course_name }}
      </p>
      <p class="code">
        {{ $props.course.course_code }} | {{ $props.course.start_yr }}-{{
          $props.course.end_yr
        }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: Object,
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
  background: rgb(135, 87, 237);
  background: linear-gradient(
    90deg,
    rgba(135, 87, 237, 1) 0%,
    rgba(77, 81, 255, 1) 100%
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
.code {
  font-family: "Poppinsm";
  margin-top: -3px;
  font-size: 12px;
}
</style>
