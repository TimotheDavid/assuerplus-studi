<template>
  <main v-for="(value, index) of witnesses" v-bind:key="index">
    <Button
      :label="createValue(value)"
      disabled
      class="w-full my-2 h-3rem"
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
  console.log({ response });
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
  background: #9caeb7;
  color: #6c757d;
}
</style>
