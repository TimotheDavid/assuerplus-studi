<template>
  <main>
    <div
      class="flex flex-column justify-content-around align-items-center my-20"
    >
      <Avatar
        icon="pi pi-user"
        class="mr-2"
        size="large"
        style="background-color: #2196f3; color: #ffffff"
        shape="circle"
      />
      <h3 class="text-2xl text-justify text-left w-10">
        Vous les vous-vous vous géolocaliser pour vous permettre d’appeller une
        dépaneuse ?
      </h3>
    </div>

    <div
      class="flex flex-column justify-content-around align-items-center w-full"
    >
      <InputText
        placeholder="addresse"
        class="mb-5"
        v-model="findPlace.address"
      ></InputText>
      <InputText
        placeholder="ville"
        class="mb-5"
        v-model="findPlace.city"
      ></InputText>
      <InputText
        placeholder="code postal"
        class="mb-5"
        v-model="findPlace.postal_code"
      ></InputText>
    </div>

    <div
      class="flex flex-column justify-content-around align-items-center w-full"
    >
      <Button
        label="Entrer l'addresse"
        class="h-3rem mb-5"
        @click="findAdress"
      ></Button>
      <Button
        icon="pi pi-search"
        label="se géolocaliser"
        iconPos="right"
        class="h-3rem"
      />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { uselocationStore } from "../store/locationStore";
import { useAccidentStore } from "../store/accidentStore";
import * as api from "../api";

const router = useRouter();
const locationStore = uselocationStore();
const accidentStore = useAccidentStore();
const findPlace = ref({
  address: "",
  city: "",
  postal_code: "",
});

async function findAdress() {
  const location = {
    lat: 43.57978388459966,
    lng: 3.9373809850103143,
  };

  locationStore.lat = location.lat;
  locationStore.lng = location.lng;
  console.log(accidentStore.getFromStorage());
  const data = {
    accidentId: accidentStore.getFromStorage(),
    location: {
      lng: location.lng,
      lat: location.lat,
    },
  };
  await api.updatelocations(data);
  router.push("/find/select");
}
</script>
<style lang="scss" scoped>
input,
button {
  width: 80%;
}
</style>
