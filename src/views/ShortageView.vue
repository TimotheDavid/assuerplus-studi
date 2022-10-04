<template>
  <main>
    <RedirectToSummaryComponent />
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

    <span class="p-float-label my-3 flex flex flex-column">
      <p class="my-3 mx-5">Date et heure de l'accident</p>
      <Calendar v-model="input.date" :showTime="true" class="w-10 m-auto" />
    </span>

    <div class="flex my-8 justify-content-center">
      <label for="uploader">
        Mettre en ligne une image
        <input id="uploader" type="file" @change="uploadFiles" ref="file" />
      </label>
    </div>
  </main>
</template>
<script setup>
import RedirectToSummaryComponent from "../components/RedirectToSummaryComponent";
import { useAccidentStore } from "../store/accidentStore";
import { ref } from "vue";
import * as api from "../api";

const accidentStore = useAccidentStore();

const file = ref(null);
const input = ref({
  description: "",
  accidentId: "",
  date: "",
});

async function uploadFiles() {
  const formData = new FormData();
  formData.append("file", file.value.files[0]);
  const data = {
    file: formData,
    accidentId: accidentStore.getFromStorage(),
  };

  const response = await api.upload(data);

  if (response.status !== 201) {
    return;
  }
}

async function save() {
  const date = new Date(input.value.date);

  input.value.date = date.getTime();
  input.value.accidentId = accidentStore.getFromStorage();
  await api.updateDescription(input.value);
}
</script>

<style scoped>
input[type="file"] {
  display: none;
}

label {
  background: deepskyblue;
  height: 5vh;
  text-align: center;
  line-height: 5vh;
  padding: 0 2rem;
  outline: white;
  border-radius: 2%;
  font-size: 1em;
  color: white;
  font-weight: bold;
}
</style>
