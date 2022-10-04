<template>
  <main class="w-full">
    <LogoutComponent />
    <div>
      <Button
        label="Ajouter des témoins"
        icon="pi pi-user"
        iconPos="right"
        @click="addWitness()"
      />
      <WitnessComponent />
    </div>
    <div>
      <Button
        label="Ajouter un conducteur"
        icon="pi pi-car"
        iconPos="right"
        @click="addDriver()"
      />
      <DriverComponent />
    </div>
    <div>
      <Button
        label="description des dégâts"
        icon="pi pi-plus"
        iconPos="right"
        @click="addShortage()"
      />
    </div>
    <Button label="envoyer" icon="pi pi-check" icon-pos="right" @click="send">
    </Button>
  </main>
</template>
<script setup>
import LogoutComponent from "../components/LogoutComponent.vue";
import WitnessComponent from "../components/WitnessComponent.vue";
import DriverComponent from "../components/DriverComponent.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

function addWitness() {
  router.push("/witness");
}

function addDriver() {
  router.push("/driver");
}

function addShortage() {
  router.push("/shortage");
}
</script>
<style lang="scss" scoped>
div {
  width: 90%;
  margin: auto;
}

button {
  margin: 2rem 0;
  width: 100%;
  height: 3rem;
}
</style>
