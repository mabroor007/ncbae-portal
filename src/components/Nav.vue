<template>
  <div class="main">
    <button
      v-on:click="
        if (!props.stdIsActive) router.push({ name: 'StudentsHome' });
      "
      v-bind:class="{ activeStd: props.stdIsActive }"
    >
      Students
    </button>
    <button
      v-on:click="
        if (!props.tchIsActive) router.push({ name: 'TeachersHome' });
      "
      v-bind:class="{ activeTch: props.tchIsActive }"
    >
      Teachers
    </button>
    <button
      v-on:click="if (!props.crsIsActive) router.push({ name: 'CoursesHome' });"
      v-bind:class="{ activeCrs: props.crsIsActive }"
    >
      Courses
    </button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  props: {
    stdIsActive: Boolean,
    tchIsActive: Boolean,
    crsIsActive: Boolean,
  },
  setup(props) {
    const router = useRouter();
    return { props, router };
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  max-height: 440px;
  width: 100%;
}
button {
  padding: 5px 12px;
  font-family: "Poppins";
  font-weight: 600;
  font-size: 1.1rem;
  background: none;
  outline: none;
  border: none;
  text-align: center;
  margin: 10px 0px;
  border-radius: 9px;
  cursor: pointer;
  transition: all 0.2s;
  color: #212121;
  filter: drop-shadow(0 0 37px rgba(0, 0, 0, 0.253));
}
button:hover {
  color: whitesmoke;
  background: rgb(58, 58, 58);
}
button.activeStd {
  background: #ffb629;
  color: white;
  cursor: not-allowed;
}
button.activeTch {
  background: #1ce478;
  color: white;
  cursor: not-allowed;
}
button.activeCrs {
  background: #8757ed;
  color: white;
  cursor: not-allowed;
}
</style>
