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
        <InputText
          id="name"
          type="text"
          v-model="input.name"
          class="w-full"
          :class="{ 'p-invalid': send && !input.name }"
        />
        <label for="name">Nom</label>
        <span v-if="input.name && send">
          <small class="p-error">remplissez le nom</small>
        </span>
      </span>

      <span class="p-float-label my-3">
        <InputText
          id="firstname"
          type="text"
          v-model="input.firstname"
          class="w-full"
          :class="{ 'p-invalid': send && !input.firstname }"
        />
        <label for="firstname">Prénom</label>

        <span v-if="input.firstname && send">
          <small class="p-error">remplissez le prénom</small>
        </span>
      </span>

      <span class="p-float-label my-3">
        <InputText
          id="email"
          type="email"
          v-model="input.email"
          class="w-full"
          :class="{ 'p-invalid': send && !input.email }"
        />
        <label for="email">Email</label>

        <span v-if="input.email && send">
          <small class="p-error">remplissez l'email</small>
        </span>
      </span>

      <span class="p-float-label my-3">
        <InputText
          id="permit_place"
          type="text"
          v-model="input.driver_permit_place"
          class="w-full"
          :class="{ 'p-invalid': send && !input.driver_permit_place }"
        />
        <label for="permit_place">Lieux d'obtention du permis</label>

        <span v-if="input.driver_permit_place && send">
          <small class="p-error"
            >remplissez le lieux d'obtention du permis</small
          >
        </span>
      </span>

      <span class="p-float-label my-3">
        <InputText
          id="permit_number"
          type="text"
          v-model="input.driver_permit_number"
          class="w-full"
          :class="{ 'p-invalid': send && !input.driver_permit_number }"
        />
        <label for="permit_number">Numéro du permis</label>

        <span v-if="input.driver_permit_number && send">
          <small class="p-error">remplissez le numéro de permis</small>
        </span>
      </span>

      <span class="p-float-label my-3">
        <Calendar
          id="permit_date"
          inputId="time24"
          class="w-full"
          v-model="input.driver_permit_date"
          :class="{ 'p-invalid': send && !input.driver_permit_date }"
        />
        <label for="permit_date">Date d'obtention du permis</label>
        <span v-if="input.driver_permit_date && send">
          <small class="p-error"
            >remplissez la date d'obtention du permis</small
          >
        </span>
      </span>
    </div>
  </main>
</template>

<script setup>
import RedirectToSummaryComponent from "../components/RedirectToSummaryComponent";
import { ref } from "vue";
import { useAccidentStore } from "../store/accidentStore";
import { useToast } from "primevue/usetoast";
import { useRouter } from "vue-router";
import * as api from "../api";

const accidentStore = useAccidentStore();
const toast = useToast();

const router = useRouter();
const send = ref(false);
const input = ref({
  name: null,
  firstname: null,
  email: null,
  driver_permit_number: null,
  driver_permit_place: null,
  driver_permit_date: null,
  accidentId: null,
});

async function save() {
  send.value = true;
  input.value.accidentId = accidentStore.getFromStorage();
  const nullish = Object.values(input.value).some((item) => item == null);
  if (!nullish) {
    const response = await api.updateDriver(input.value);

    if (response.status > 300) {
      toast.add({
        severity: "error",
        summary:
          "contacter un administrateur, ou attendez que l'application redémarre",
      });
    }
    input.value = {};
    send.value = false;
  }
}
</script>
