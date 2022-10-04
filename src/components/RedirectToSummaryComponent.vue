<template>
  <div class="w-full flex flex-row-reverse">
    <i
      class="pi pi-home m-2"
      style="font-size: 2rem"
      @click="redirectToSummary()"
    ></i>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function redirectToSummary() {
  router.push("/summary");
}
</script>
