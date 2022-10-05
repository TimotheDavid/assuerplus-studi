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
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";
import { useUserStore } from "../store/userStore";

const toast = useToast();
const router = useRouter();
const userStore = useUserStore();

function addWitness() {
  router.push("/witness");
}

function addDriver() {
  router.push("/driver");
}

function addShortage() {
  router.push("/shortage");
}

function send() {
  toast.add({
    severity: "info",
    summary:
      "Merci d'avoir ajouté vos informations d'accident, nous reviendrons vers vous le plus rapidement possible",
    life: 3000,
  });
  userStore.resetToken();
  router.push("/");
}
</script>
<style lang="css" scoped>
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
