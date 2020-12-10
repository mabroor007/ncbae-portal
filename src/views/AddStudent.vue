<template>
  <div class="home win">
    <Connecting :load="state.loading" />
    <div class="main">
      <div class="mainContent">
        <div class="backBtn">
          <div class="btn" @click="$router.push({ name: 'StudentsHome' })">
            <div class="back">
              <svg
                width="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM18 10.5L2 10.5L2 13.5L18 13.5L18 10.5Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div class="title">
            Students
          </div>
        </div>
        <div class="photoSect">
          <div class="photo">
            <img v-if="state.imgSrc" :src="state.imgSrc" />
            <input @change="handleFileChange" class="fileIn" type="file" />
            <div v-if="!state.imgSrc" class="cam">
              <svg width="100%" viewBox="0 0 104 104" fill="none">
                <path
                  d="M68.7727 59.0178C68.7727 68.2666 61.2489 75.7905 52 75.7905C42.7511 75.7905 35.2302 68.2666 35.2302 59.0178C35.2302 49.7689 42.7511 42.2451 52 42.2451C61.2489 42.2451 68.7727 49.7718 68.7727 59.0178ZM104 35.2014V82.84C104 89.1908 98.8509 94.34 92.5 94.34H11.5C5.14911 94.34 0 89.1908 0 82.84V35.2014C0 28.8505 5.14911 23.7014 11.5 23.7014H25.6449V19.7224C25.6449 14.165 30.1472 9.65991 35.7074 9.65991H68.2926C73.8528 9.65991 78.3551 14.165 78.3551 19.7224V23.6985H92.5C98.8509 23.7014 104 28.8505 104 35.2014ZM77.3977 59.0178C77.3977 45.0137 66.0041 33.6201 52 33.6201C37.9988 33.6201 26.6052 45.0137 26.6052 59.0178C26.6052 73.0219 37.9988 84.4155 52 84.4155C66.0041 84.4155 77.3977 73.0219 77.3977 59.0178Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <form @submit.prevent="handleSubmit" class="infoSect">
          <input
            v-model="state.name"
            class="field"
            placeholder="Name"
            required
            type="text"
          />
          <input
            v-model="state.roll"
            class="field"
            placeholder="Roll no"
            required
            type="text"
          />
          <input
            v-model="state.semester"
            class="field"
            placeholder="Semester"
            required
            type="text"
          />
          <input
            v-model="state.session"
            class="field"
            placeholder="Session"
            required
            type="text"
          />
          <input
            v-model="state.course"
            class="field"
            placeholder="Course"
            required
            type="text"
          />
          <button type="submit" class="save">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import Connecting from "@/components/Connecting";

export default {
  setup() {
    const router = useRouter();
    const state = reactive({
      loading: false,
      imgSrc: "",
      name: "",
      roll: "",
      semester: "",
      session: "",
      course: "",
    });

    const handleSubmit = () => {
      if (!state.imgSrc) return;
      router.push({ name: "StudentsHome" });
    };

    const handleFileChange = (e) => {
      if (!e.target.files) return;
      if (!/(\.jpeg|\.png|\.jpg)$/i.exec(e.target.value)) return;

      const reader = new FileReader();
      reader.onloadend = () => {
        state.imgSrc = reader.result;
      };
      reader.readAsDataURL(e.target.files[0]);
    };

    return {
      state,
      Connecting,
      handleSubmit,
      handleFileChange,
    };
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mainContent {
  width: 950px;
  height: 80%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.photoSect {
  width: 300px;
  height: 80%;
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  color: white;
}
.photo {
  cursor: pointer;
  margin-right: 2rem;
  width: 220px;
  height: 235px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: rgb(255, 182, 41);
  background: linear-gradient(
    180deg,
    rgba(255, 182, 41, 1) 0%,
    rgba(255, 137, 28, 1) 100%
  );
  filter: drop-shadow(0 0 37px rgba(0, 0, 0, 0.253));

  position: relative;
  overflow: hidden;
}
img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cam {
  width: 30%;
}
.infoSect {
  width: 300px;
  height: 80%;
  margin-top: 2rem;
  color: white;

  display: flex;
  flex-direction: column;
}
input.field {
  font-family: "Poppinsm";
  font-size: 1rem;
  border: none;
  padding: 1rem;
  background: #48c4fa;
  border-radius: 10px;
  color: white;
  outline: none;
  margin-bottom: 0.8rem;
  filter: drop-shadow(0 0 37px rgba(47, 47, 47, 0.253));
}
input.field::placeholder {
  color: rgba(255, 255, 255, 0.719);
}
.save {
  font-family: "Poppinsm";
  font-size: 1rem;
  border: none;
  margin-top: 1rem;
  padding: 1rem;
  background: #0aef4a;
  border-radius: 10px;
  outline: none;
  color: white;
  cursor: pointer;
  filter: drop-shadow(0 0 10px rgba(56, 56, 56, 0.123));
}
.backBtn {
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
}
.btn {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #2db9ff;
  border-radius: 15px;
  cursor: pointer;

  filter: drop-shadow(0 0 37px rgba(0, 0, 0, 0.253));
}
.back {
  width: 25%;
}
.title {
  height: 50px;
  font-family: "Poppins";
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  color: #212121;
}
.fileIn {
  color: transparent;
  outline: none;
  height: 100%;
  width: 100%;
  position: absolute;
  cursor: pointer;
}
.fileIn::-webkit-file-upload-button {
  visibility: hidden;
  outline: none;
}
.fileIn::before {
  visibility: hidden;
  content: "";
  color: black;
  display: inline-block;
  background: -webkit-linear-gradient(top, #f9f9f9, #e3e3e3);
  border: 1px solid #999;
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
}
.fileIn:hover::before {
  border-color: black;
  outline: none;
}
.fileIn:active {
  outline: 0;
}
.fileIn:active::before {
  outline: none;
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}
</style>
