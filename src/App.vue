<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="slide">
        <component :is="Component" />
      </transition>
    </router-view>

    <transition name="slide">
      <BackStack :queries="state.queries" v-if="state.showStack" />
    </transition>
  </div>
</template>

<script>
import BackStack from "@/components/BackStack";
import { reactive } from "vue";
import { defQueries } from "./defQueries";
const { ipcRenderer } = window.require("electron");

export default {
  setup() {
    const state = reactive({
      showStack: false,
      queries: defQueries,
    });

    ipcRenderer.on("mainmsg", (e, { title, code }) => {
      state.queries.unshift({ title, code });
    });

    // Event for Toggleing Backstack
    document.addEventListener("keypress", (e) => {
      if (e.ctrlKey && e.key === "s") {
        return (state.showStack = !state.showStack);
      }
    });

    return {
      BackStack,
      state,
    };
  },
};
</script>

<style>
::selection {
  background-color: black;
  color: white;
}
::-webkit-scrollbar {
  display: none;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  overflow: hidden;
}
.win {
  position: absolute;
  width: 100%;
  height: 100%;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s;
}
.slide-enter-from {
  transform: scale(0.7);
  opacity: 0;
}
.slide-leave-to {
  transform: scale(0.5);
  opacity: 0;
}
img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}
@font-face {
  font-family: "Poppins";
  src: url("./assets/Poppins/Poppins-SemiBold.ttf") format("woff2"),
    url("./assets/Poppins/Poppins-SemiBold.ttf") format("woff"),
    url("./assets/Poppins/Poppins-SemiBold.ttf") format("truetype");
}
@font-face {
  font-family: "Poppinsl";
  src: url("./assets/Poppins/Poppins-Light.ttf") format("woff2"),
    url("./assets/Poppins/Poppins-Light.ttf") format("woff"),
    url("./assets/Poppins/Poppins-Light.ttf") format("truetype");
}
@font-face {
  font-family: "Poppinsm";
  src: url("./assets/Poppins/Poppins-Medium.ttf") format("woff2"),
    url("./assets/Poppins/Poppins-Medium.ttf") format("woff"),
    url("./assets/Poppins/Poppins-Medium.ttf") format("truetype");
}
@font-face {
  font-family: "Poppinsb";
  src: url("./assets/Poppins/Poppins-Bold.ttf") format("woff2"),
    url("./assets/Poppins/Poppins-Bold.ttf") format("woff"),
    url("./assets/Poppins/Poppins-Bold.ttf") format("truetype");
}
</style>
