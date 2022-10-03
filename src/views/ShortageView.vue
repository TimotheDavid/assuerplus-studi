<template>
  <main>
    <p class="w-full text-left text-right px-4 text-4xl">+</p>
    <div class="flex">
      <Button
        label="description des dégâts"
        class="mx-auto mb-2 w-full h-3rem text-lg"
        @click="save"
      ></Button>
    </div>

    <span class="p-float-label my-3 flex flex flex-column">
      <p class="my-3 mx-5">Description de l'accident</p>
      <Textarea
        id="description"
        class="w-10 m-auto"
        v-model="input.description"
        :autoResize="true"
        rows="5"
        cols="30"
      />
    </span>

    <div class="flex my-8">
      <Button class="h-10rem w-10rem m-auto">Ajouter une photo</Button>
    </div>
  </main>
</template>
<script setup>
import { useAccidentStore } from "../store/accidentStore";
import { ref } from "vue";
import * as api from "../api";
const accidentStore = useAccidentStore();

const input = ref({
  description: "",
  accidentId: "",
});

async function save() {
  input.value.accidentId = accidentStore.getFromStorage();
  await api.updateDescription(input.value);
}
</script>
