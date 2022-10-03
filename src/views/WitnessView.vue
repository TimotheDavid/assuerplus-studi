<template>
  <main>
    <p class="w-full text-left text-right px-4 text-4xl">+</p>
    <div class="flex">
      <Button
        label="Ajouter des témoins"
        class="mx-auto mb-2 w-full h-3rem text-lg"
        @click="save"
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
          id="address"
          type="text"
          v-model="input.address"
          class="w-full"
        />
        <label for="email">Addresse</label>
      </span>

      <span class="p-float-label my-3">
        <InputText id="city" type="text" v-model="input.city" class="w-full" />
        <label for="city">Ville</label>
      </span>
      <span class="p-float-label my-3">
        <InputNumber
          id="postal_code"
          :min="0"
          v-model="input.postal_code"
          class="w-full"
        />
        <label for="postal_code">Code postal</label>
      </span>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useAccidentStore } from "../store/accidentStore";
import * as api from "../api";
const accidentStore = useAccidentStore();
const input = ref({
  name: "",
  firstname: "",
  email: "",
  address: "",
  city: "",
  postal_code: 0,
  accidentId: "",
});

async function save() {
  if (input.value != null) {
    input.value.accidentId = accidentStore.getFromStorage();

    const response = await api.createWitness(input.value);
    if (response.status !== 201) {
      console.log("error");
    }
    input.value = {};
  }
}
</script>
