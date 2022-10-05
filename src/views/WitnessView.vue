<template>
  <main>
    <RedirectToSummaryComponent />
    <div class="flex">
      <Button
        label="Ajouter des témoins"
        class="mx-auto mb-2 w-full h-3rem text-lg"
        @click="save"
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
        <span v-if="!input.name && send">
          <small class="p-error">remplissez le nom de famille </small>
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

        <span v-if="!input.firstname && send">
          <small class="p-error">remplissez le prénom </small>
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

        <span v-if="!input.email && send">
          <small class="p-error">remplissez l'email </small>
        </span>
        <label for="email">Email</label>
      </span>

      <span class="p-float-label my-3">
        <InputText
          id="address"
          type="text"
          v-model="input.address"
          class="w-full"
          :class="{ 'p-invalid': send && !input.address }"
        />
        <span v-if="!input.address && send">
          <small class="p-error">remplissez l'addresse du témoin </small>
        </span>
        <label for="email">Addresse</label>
      </span>

      <span class="p-float-label my-3">
        <InputText
          id="city"
          type="text"
          v-model="input.city"
          class="w-full"
          :class="{ 'p-invalid': send && !input.city }"
        />
        <label for="city">Ville</label>
        <span v-if="!input.city && send">
          <small class="p-error">remplissez la ville </small>
        </span>
      </span>
      <span class="p-float-label my-3">
        <InputNumber
          id="postal_code"
          :min="0"
          v-model="input.postal_code"
          class="w-full"
          :class="{ 'p-invalid': send && !input.postal_code }"
        />

        <span v-if="!input.city && send">
          <small class="p-error">remplissez le code postal </small>
        </span>
        <label for="postal_code">Code postal</label>
      </span>
    </div>
  </main>
</template>

<script setup>
import RedirectToSummaryComponent from "../components/RedirectToSummaryComponent";
import { ref } from "vue";
import { useToast } from "primevue/usetoast";
import { useAccidentStore } from "../store/accidentStore";
import { useRouter } from "vue-router";

import * as api from "../api";
const accidentStore = useAccidentStore();
const router = useRouter();
const toast = useToast();
const send = ref(false);
const input = ref({
  name: null,
  firstname: null,
  email: null,
  address: null,
  city: null,
  postal_code: null,
  accidentId: null,
});

async function save() {
  send.value = true;
  input.value.accidentId = accidentStore.getFromStorage();
  const nullish = Object.values(input.value).some((item) => item == null);
  if (!nullish) {
    const response = await api.createWitness(input.value);
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
