<template>
  <main>
    <RedirectToSummaryComponent />
    <div class="flex">
      <Button
        label="Ajouter un conducteur"
        class="mx-auto mb-2 w-full h-3rem text-lg"
        @click="save()"
      ></Button>
    </div>

    <div class="flex flex-column w-full">
      <span class="p-float-label my-3">
        <InputText id="name" type="text" v-model="input.name" class="w-full" />
        <label for="name">Nom</label>
      </span>

      <span class="p-float-label my-3">
        <InputText
          id="firstname"
          type="text"
          v-model="input.firstname"
          class="w-full"
        />
        <label for="firstname">Prénom</label>
      </span>

      <span class="p-float-label my-3">
        <InputText
          id="email"
          type="email"
          v-model="input.email"
          class="w-full"
        />
        <label for="email">Email</label>
      </span>

      <span class="p-float-label my-3">
        <InputText
          id="permit_place"
          type="text"
          v-model="input.driver_permit_place"
          class="w-full"
        />
        <label for="permit_place">Lieux d'obtention du permis</label>
      </span>

      <span class="p-float-label my-3">
        <InputText
          id="permit_number"
          type="text"
          v-model="input.driver_permit_number"
          class="w-full"
        />
        <label for="permit_number">Numéro du permis</label>
      </span>

      <span class="p-float-label my-3">
        <Calendar
          id="permit_date"
          inputId="time24"
          class="w-full"
          v-model="input.driver_permit_date"
        />
        <label for="permit_date">Date d'obtention du permis</label>
      </span>
    </div>
  </main>
</template>

<script setup>
import RedirectToSummaryComponent from "../components/RedirectToSummaryComponent";
import { ref } from "vue";
import { useAccidentStore } from "../store/accidentStore";
import { useRouter } from "vue-router";
const accidentStore = useAccidentStore();
import * as api from "../api";

const router = useRouter();
const input = ref({
  name: "",
  firstname: "",
  email: "",
  driver_permit_number: "",
  driver_permit_place: "",
  driver_permit_date: "",
  accidentId: "",
});

async function save() {
  input.value.accidentId = accidentStore.getFromStorage();
  await api.updateDriver(input.value);
  input.value = {};
}
</script>
