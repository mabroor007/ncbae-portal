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
          <div
            class="ebtn"
            @click="
              $router.push({
                name: 'UpdateTeacher',
                params: { id: state.teacher.id },
              })
            "
          >
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
        <div class="delBtn">
          <div class="dtitle">
            Delete
          </div>
          <div
            @click="
              $router.push({
                name: 'Del',
                params: { id: state.teacher.id, page: $route.name },
              })
            "
            class="dbtn"
          >
            <div class="del">
              <svg fill="#ffffff" viewBox="-47 0 512 512" width="100%">
                <path
                  d="m416.875 114.441406-11.304688-33.886718c-4.304687-12.90625-16.339843-21.578126-29.941406-21.578126h-95.011718v-30.933593c0-15.460938-12.570313-28.042969-28.027344-28.042969h-87.007813c-15.453125 0-28.027343 12.582031-28.027343 28.042969v30.933593h-95.007813c-13.605469 0-25.640625 8.671876-29.945313 21.578126l-11.304687 33.886718c-2.574219 7.714844-1.2695312 16.257813 3.484375 22.855469 4.753906 6.597656 12.445312 10.539063 20.578125 10.539063h11.816406l26.007813 321.605468c1.933594 23.863282 22.183594 42.558594 46.109375 42.558594h204.863281c23.921875 0 44.175781-18.695312 46.105469-42.5625l26.007812-321.601562h6.542969c8.132812 0 15.824219-3.941407 20.578125-10.535157 4.753906-6.597656 6.058594-15.144531 3.484375-22.859375zm-249.320312-84.441406h83.0625v28.976562h-83.0625zm162.804687 437.019531c-.679687 8.402344-7.796875 14.980469-16.203125 14.980469h-204.863281c-8.40625 0-15.523438-6.578125-16.203125-14.980469l-25.816406-319.183593h288.898437zm-298.566406-349.183593 9.269531-27.789063c.210938-.640625.808594-1.070313 1.484375-1.070313h333.082031c.675782 0 1.269532.429688 1.484375 1.070313l9.269531 27.789063zm0 0"
                />
                <path
                  d="m282.515625 465.957031c.265625.015625.527344.019531.792969.019531 7.925781 0 14.550781-6.210937 14.964844-14.21875l14.085937-270.398437c.429687-8.273437-5.929687-15.332031-14.199219-15.761719-8.292968-.441406-15.328125 5.925782-15.761718 14.199219l-14.082032 270.398437c-.429687 8.273438 5.925782 15.332032 14.199219 15.761719zm0 0"
                />
                <path
                  d="m120.566406 451.792969c.4375 7.996093 7.054688 14.183593 14.964844 14.183593.273438 0 .554688-.007812.832031-.023437 8.269531-.449219 14.609375-7.519531 14.160157-15.792969l-14.753907-270.398437c-.449219-8.273438-7.519531-14.613281-15.792969-14.160157-8.269531.449219-14.609374 7.519532-14.160156 15.792969zm0 0"
                />
                <path
                  d="m209.253906 465.976562c8.285156 0 15-6.714843 15-15v-270.398437c0-8.285156-6.714844-15-15-15s-15 6.714844-15 15v270.398437c0 8.285157 6.714844 15 15 15zm0 0"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="detailsSect">
          <div class="imgSect">
            <img class="img" :src="state.teacher.profile_pic" />
          </div>
          <div class="dataSect">
            <div class="name">{{ state.teacher.teacher_name }}</div>
            <div class="field">{{ state.teacher.course_name }}</div>
            <div class="field">{{ state.teacher.gender }}</div>
            <div class="field">{{ state.teacher.teacher_type }}</div>
            <div class="field">{{ state.teacher.qualification }}</div>
            <div class="field">{{ state.teacher.phone }}</div>
            <div class="field">{{ state.teacher.email }}</div>
            <div class="field">{{ state.teacher.course_code }}</div>
            <div class="field">{{ state.teacher.subject_name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
const { ipcRenderer } = window.require("electron");

export default {
  setup() {
    const route = useRoute();
    const state = reactive({
      teacher: {
        id: "",
        teacher_name: "",
        gender: "",
        teacher_type: "",
        qualification: "",
        phone: "",
        email: "",
        course_name: "",
        course_code: "",
        subject_name: "",
        profile_pic: "",
      },
    });

    onMounted(async () => {
      try {
        const res = await ipcRenderer.invoke(
          "getTeacherDetails",
          route.params.id
        );
        if (res.done) {
          state.teacher = res.teacher;
        }
      } catch (error) {
        console.log(error);
      }
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
  object-fit: cover;
}
.name {
  font-family: "Poppins";
  font-size: 35px;
  margin-top: 0.5rem;
}
.field {
  font-family: "Poppinsm";
  font-size: 18px;
  margin: 0.1rem 0;
}
.delBtn {
  position: absolute;
  bottom: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
}
.dbtn {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #ff3c00;
  border-radius: 15px;
  cursor: pointer;

  filter: drop-shadow(0 0 37px rgba(0, 0, 0, 0.253));
}
.del {
  width: 45%;
}
.dtitle {
  height: 50px;
  font-family: "Poppins";
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: #212121;
}
</style>
