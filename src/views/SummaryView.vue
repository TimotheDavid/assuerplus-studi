<template>
  <main class="w-full">
    <div>
      <Button label="Ajouter des témoins" icon="pi pi-user" iconPos="right" />
      <WitnessComponent />
    </div>
    <div>
      <Button label="Ajouter un conducteur" icon="pi pi-car" iconPos="right" />
      <DriverComponentButton />
    </div>
    <div>
      <Button
        label="description des dégâts"
        icon="pi pi-plus"
        iconPos="right"
      />
    </div>
    <div>
      <Button label="date et heure" icon="pi pi-plus" iconPos="right" />
      <Calendar
        inputId="time24"
        v-model="date7"
        :showTime="true"
        class="w-full"
      />
    </div>
  </main>
</template>
<script>
import WitnessComponent from "../components/WitnessComponent.vue";
export default {
  components: { WitnessComponent },
};
</script>
<style lang="scss" scoped>
div {
  background: red;
  width: 90%;
  margin: auto;
}

button {
  margin: 2rem 0;
  width: 100%;
  height: 3rem;
}
</style>
