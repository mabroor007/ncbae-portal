<template>
  <div class="win">
    <div class="main">
      <div class="confirmBox">
        <div class="title">Confirm Delete</div>
        <div class="delIcon">
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
        <div class="actionBox">
          <div @click="$router.go(-1)" class="back">
            <div class="no">
              <svg version="1.1" width="100%" viewBox="0 0 95.939 95.939">
                <g>
                  <path
                    d="M62.819,47.97l32.533-32.534c0.781-0.781,0.781-2.047,0-2.828L83.333,0.586C82.958,0.211,82.448,0,81.919,0
		c-0.53,0-1.039,0.211-1.414,0.586L47.97,33.121L15.435,0.586c-0.75-0.75-2.078-0.75-2.828,0L0.587,12.608
		c-0.781,0.781-0.781,2.047,0,2.828L33.121,47.97L0.587,80.504c-0.781,0.781-0.781,2.047,0,2.828l12.02,12.021
		c0.375,0.375,0.884,0.586,1.414,0.586c0.53,0,1.039-0.211,1.414-0.586L47.97,62.818l32.535,32.535
		c0.375,0.375,0.884,0.586,1.414,0.586c0.529,0,1.039-0.211,1.414-0.586l12.02-12.021c0.781-0.781,0.781-2.048,0-2.828L62.819,47.97
		z"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div @click="handleDel" class="delBtn">
            <div class="del">
              <svg version="1.1" width="100%" viewBox="0 0 17.837 17.837">
                <g>
                  <path
                    style="fill:#030104;"
                    d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27
		c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0
		L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    const handleDel = () => {
      if (route.params.page === "StudentDetail") {
        console.log("Student Deleted :", route.params.id);
        router.push({ name: "StudentsHome" });
      }
      if (route.params.page === "TeacherDetail") {
        console.log("Teacher Deleted :", route.params.id);
        router.push({ name: "TeachersHome" });
      }
      if (route.params.page === "CourseDetail") {
        console.log("Course Deleted :", route.params.id);
        router.push({ name: "CoursesHome" });
      }
    };
    return { handleDel };
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
  color: white;
}
.confirmBox {
  width: 400px;
  height: 400px;
  background-color: #ff6c6c;
  background-image: linear-gradient(90deg, #ff6c6c 0%, #ff7a00 100%);

  filter: drop-shadow(0 0 37px rgba(0, 0, 0, 0.253));
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  align-items: center;
}
.title {
  font-family: "Poppins";
  font-size: 36px;
  margin-top: 3rem;
}
.delIcon {
  width: 100px;
  margin-top: 2rem;
}
.actionBox {
  margin-top: 2.5rem;
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.back {
  height: 68px;
  width: 68px;
  border-radius: 10px;
  background: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.delBtn {
  height: 68px;
  width: 68px;
  border-radius: 10px;
  background: #fff500;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.del {
  width: 55%;
  margin-top: 6px;
}
.no {
  width: 40%;
  margin-top: 6px;
}
</style>
