<template>
  <div class="home win">
    <Connecting :load="!state.dbConnected" />
    <div class="main">
      <form @submit.prevent="handleLogin">
        <img src="../assets/ncbae.png" />
        <input
          v-model="state.loginData.admin"
          placeholder="Admin"
          type="text"
          required
        />
        <input
          v-model="state.loginData.password"
          placeholder="Password"
          type="password"
          required
        />
        <button type="submit">login</button>
      </form>
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
      dbConnected: false,
      loginData: {
        admin: "",
        password: "",
      },
    });

    const handleLogin = () => {
      router.push({ name: "StudentsHome" });
    };

    setTimeout(() => {
      state.dbConnected = true;
    }, 5000);

    return {
      state,
      Connecting,
      handleLogin,
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
form {
  display: flex;
  flex-direction: column;
}
img {
  max-width: 250px;
  margin-bottom: 1.7rem;
}
input {
  background-color: #ededed;
  font-family: Helvetica, sans-serif;
  border: none;
  padding: 1rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  border-radius: 12px;
  outline: none;
  transition: all 0.3s;
}
button {
  margin-left: auto;
  width: 100px;
  height: 50px;
  font-size: 1rem;
  border: none;
  border-radius: 12px;
  background-color: #6dc9f7;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
  outline: none;
}
input:focus {
  background-color: #6dc9f7;
}

button:hover {
  background-color: #24b4fb;
}
</style>
