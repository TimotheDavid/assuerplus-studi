<template>
  <main v-for="(value, index) of witnesses" v-bind:key="index">
    <Button
      :label="createValue(value)"
      class="w-full my-2 h-3rem lg:text-3xl"
      icon=""
    ></Button>
  </main>
</template>
<script setup>
import { onMounted, ref } from "vue";
import * as api from "../api";
import { useAccidentStore } from "../store/accidentStore";

const accidentStore = useAccidentStore();
const witnesses = ref([]);
async function startup() {
  const response = await api.getWitness(accidentStore.getFromStorage());
  if (response.status == 200) {
    witnesses.value = response.data;
  }
}

function createValue(value) {
  return `${value.firstname} ${value.name}`;
}

onMounted(async () => {
  await startup();
});
</script>

<style scoped>
button {
  background: #aebdca;
  color: #ffff;
}
</style>
