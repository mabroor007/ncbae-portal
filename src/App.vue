<template>
  <router-view v-slot="{ Component }">
    <transition name="slide">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
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
  transition: all 0.3s;
}
.slide-enter-from {
  transform: scale(0.5);
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
</style>
