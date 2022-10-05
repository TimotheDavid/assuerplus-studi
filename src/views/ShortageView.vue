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
        :class="{ 'p-invalid': send && !input.description }"
      />
      <span v-if="!input.description && send">
        <small class="p-error"
          >La description de l'accident est obligatoire.</small
        >
      </span>
    </span>

    <span class="p-float-label my-3 flex flex flex-column">
      <p class="my-3 mx-5">Date et heure de l'accident</p>
      <Calendar
        v-model="input.date"
        :showTime="true"
        class="w-10 m-auto"
        :class="{ 'p-invalid': send && !input.date }"
      />

      <span v-if="!input.date && send">
        <small class="p-error">Une date d'accident est obligatoire.</small>
      </span>
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
import { useToast } from "primevue/usetoast";
import { ref } from "vue";
import * as api from "../api";

const accidentStore = useAccidentStore();
const toast = useToast();

const file = ref(null);
const send = ref(false);
const input = ref({
  description: null,
  accidentId: null,
  date: null,
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
    toast.add({
      severity: "error",
      summary:
        "contacter un administrateur, ou attendez que l'application redémarre",
    });
  }
  send.value = false;
}

async function save() {
  send.value = true;
  input.value.accidentId = accidentStore.getFromStorage();

  const nullish = Object.values(input.value).every((item) => item != null);
  if (nullish) {
    input.value.date = input.value.date.getTime();
    const response = await api.updateDescription(input.value);
    if (response.status > 300) {
      toast.add({
        severity: "error",
        summary:
          "contacter un administrateur, ou attendez que l'application redémarre",
      });
    }
  }

  send.value = false;
  input.value = {};
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
