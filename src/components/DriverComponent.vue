<template>
  <main v-if="driver.name !== null">
    <Button
      :label="createValue()"
      class="w-full my-2 h-3rem lg:text-3xl"
      icon="pi pi-car"
      icon-pos="right"
    >
    </Button>
  </main>
</template>
<script setup>
import * as api from "../api";
import { useAccidentStore } from "../store/accidentStore";
import { ref, onMounted } from "vue";

const driver = ref({});
const accidentStore = useAccidentStore();
async function startup() {
  const response = await api.getDriver(accidentStore.getFromStorage());
  if (response.status === 200) {
    driver.value = response.data;
  }
}

function createValue() {
  return driver.value.first_name + " " + driver.value.name;
}

onMounted(async () => {
  await startup();
});
</script>

<style scoped>
button {
  background: #aebdca;
}
</style>
