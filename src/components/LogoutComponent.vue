<template>
  <main class="flex justify-content-end">
    <Button
      label="Se deconnecter"
      class="text-xs w-11rem"
      @click="logout"
    ></Button>
  </main>
</template>
<script setup>
import { useUserStore } from "../store/userStore";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();
function logout() {
  userStore.resetToken();
  console.log(userStore.token);
  router.push("/");
}
</script>
