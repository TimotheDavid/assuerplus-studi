<template>
  <main
    class="flex flex-column justify-content-around align-items-center w-full"
  >
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
      <h1 class="text-2xl">Connection</h1>
    </div>
    <div
      class="flex flex-column justify-content-around align-items-center my-20"
    >
      <InputText
        placeholder="Addresse Email"
        type="email"
        class="mb-5 w-full"
        v-model="login.email"
      ></InputText>
      <Password
        placeholder="Mot de passe"
        type="password"
        class="mb-5"
        :feedback="false"
        v-model="login.password"
        toggleMask
      ></Password>
    </div>

    <div class="flex flex-column w-8">
      <div class="field-checkbox">
        <Checkbox inputId="binary" v-model="conditionChecked" :binary="true" />
        <label for="binary">J'accepte les termes d'utilisations</label>
      </div>
      <Button
        label="Se connecter"
        :disabled="!conditionChecked"
        @click="loginButton"
        class="w-full"
      ></Button>
    </div>
    <div v-if="errors">
      <Message severity="warn" :closable="true" :life="200"
        >User not found</Message
      >
    </div>
  </main>
</template>
<script setup>
import { ref } from "vue";
import * as api from "../api";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/userStore";
import { useAccidentStore } from "../store/accidentStore";

const conditionChecked = ref(false);
const router = useRouter();
const userStore = useUserStore();
const accidentStore = useAccidentStore();

const login = ref({
  email: "",
  password: "",
});

const errors = ref(false);

async function loginButton() {
  const response = await api.loginUser(login.value);
  if (response.status === 201) {
    const accidentId = await api.createAccident(response.data.userId);
    accidentStore.setToStorage(accidentId.data.id);
    userStore.setToken(response.data.token);
    userStore.userId = response.data.userId;
    userStore.setUserId();
    router.push("find");
  } else if (response.status !== 201) {
    errors.value = true;
  }
}
</script>

<style scoped lang="scss">
::v-deep(.p-password) {
  width: 15rem;
}
</style>
