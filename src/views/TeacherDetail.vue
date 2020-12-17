<template>
  <div class="home win">
    <div class="main">
      <div class="mainContent">
        <div class="backBtn">
          <div class="btn" @click="$router.push({ name: 'TeachersHome' })">
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
            Teachers
          </div>
        </div>

        <div class="editBtn">
          <div class="etitle">
            Edit
          </div>
          <div class="ebtn" @click="$router.push({ name: 'EditTeacher' })">
            <div class="edit">
              <svg fill="#ffffff" width="100%" viewBox="0 0 477.873 477.873">
                <g>
                  <g>
                    <path
                      d="M392.533,238.937c-9.426,0-17.067,7.641-17.067,17.067V426.67c0,9.426-7.641,17.067-17.067,17.067H51.2
			c-9.426,0-17.067-7.641-17.067-17.067V85.337c0-9.426,7.641-17.067,17.067-17.067H256c9.426,0,17.067-7.641,17.067-17.067
			S265.426,34.137,256,34.137H51.2C22.923,34.137,0,57.06,0,85.337V426.67c0,28.277,22.923,51.2,51.2,51.2h307.2
			c28.277,0,51.2-22.923,51.2-51.2V256.003C409.6,246.578,401.959,238.937,392.533,238.937z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M458.742,19.142c-12.254-12.256-28.875-19.14-46.206-19.138c-17.341-0.05-33.979,6.846-46.199,19.149L141.534,243.937
			c-1.865,1.879-3.272,4.163-4.113,6.673l-34.133,102.4c-2.979,8.943,1.856,18.607,10.799,21.585
			c1.735,0.578,3.552,0.873,5.38,0.875c1.832-0.003,3.653-0.297,5.393-0.87l102.4-34.133c2.515-0.84,4.8-2.254,6.673-4.13
			l224.802-224.802C484.25,86.023,484.253,44.657,458.742,19.142z"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div class="detailsSect">
          <div class="imgSect">
            <img class="img" :src="state.teacher.img" />
          </div>
          <div class="dataSect">
            <div class="name">{{ state.teacher.name }}</div>
            <div class="field">{{ state.teacher.qualification }}</div>
            <div class="field">{{ state.teacher.phone }}</div>
            <div class="field">{{ state.teacher.dob }}</div>
            <div class="field">{{ state.teacher.subject }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const state = reactive({
      teacher: {
        img: "http://picsum.photos/500",
        name: "Jhon Smith",
        qualification: "Phd",
        phone: "03434231342",
        dob: "1990",
        subject: "COmputer science",
      },
    });
    return { state };
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
.backBtn {
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
}
.editBtn {
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
}
.btn {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #1ce478;
  border-radius: 15px;
  cursor: pointer;

  filter: drop-shadow(0 0 37px rgba(0, 0, 0, 0.253));
}
.ebtn {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #ff7b51;
  border-radius: 15px;
  cursor: pointer;

  filter: drop-shadow(0 0 37px rgba(0, 0, 0, 0.253));
}
.back {
  width: 25%;
}
.edit {
  width: 40%;
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
.etitle {
  height: 50px;
  font-family: "Poppins";
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: #212121;
}
.detailsSect {
  width: 600px;
  height: 450px;
  display: flex;
}
.imgSect {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}
.dataSect {
  width: 50%;
  height: 100%;
}
.img {
  width: 220px;
  height: 235px;
  margin-right: 2rem;
  border-radius: 20px;
  filter: drop-shadow(0 0 37px rgba(0, 0, 0, 0.253));
}
.name {
  font-family: "Poppins";
  font-size: 38px;
  margin-top: 0.5rem;
}
.field {
  font-family: "Poppinsm";
  font-size: 18px;
  margin: 0.1rem 0;
}
</style>
