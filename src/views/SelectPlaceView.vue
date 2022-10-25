<template>
  <main>
    <div class="flex justify-content-around">
      <div class="w-20rem m-auto">
        <h1 class="text-center">Garage à proximité</h1>
      </div>
    </div>

    <div id="map"></div>
    <h1 class="text-center">{{ garage.name }}</h1>

    <div class="flex justify-content-around">
      <div>
        <h4>numéro de téléphone</h4>
        <p class="text-lg">{{ garage.phone }}</p>
      </div>
      <div>
        <h4>Distance</h4>
        <p class="text-center text-lg">{{ garage.distance }} km</p>
      </div>
    </div>
    <Button label="Sélectionner" class="w-full my-4" @click="select"></Button>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { uselocationStore } from "../store/locationStore";
import * as api from "../api";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useRouter } from "vue-router";
const locationStore = uselocationStore();
const router = useRouter();
const dataMaps = ref();

let mapL = L;
const garage = ref({
  name: "garage de la zorn",
  phone: "+066315533",
  distance: "25",
});

function setView() {
  const map = L.map("map").setView([locationStore.lat, locationStore.lng], 10);

  console.log(map);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  mapL = map;
}

function openClick(event) {
  const data = event.target.data;
  garage.value.name = data.name;
  garage.value.phone = data.phone;
  garage.value.distance = Math.floor(Math.random() * 1000);
}

function select() {
  router.push("/summary");
}

async function setMarker() {
  for (let marker of dataMaps.value) {
    let markerBind = new L.Marker([marker.latitude, marker.longitude]).on(
      "click",
      openClick
    );
    markerBind.data = marker;
    markerBind.addTo(mapL);
  }

  mapL.on("click", openClick);
}

async function getMaps() {
  const response = await api.getMapsData();
  dataMaps.value = response.data;
}

onMounted(async () => {
  await getMaps();
  await setView();
  setMarker();
});
</script>

<style lang="css" scoped>
#map {
  height: 400px;
}

@media (min-width: 640px) {
  #map {
    height: 600px;
  }
}
</style>
