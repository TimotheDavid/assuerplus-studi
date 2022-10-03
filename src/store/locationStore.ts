import { defineStore } from "pinia";

export const uselocationStore = defineStore("location", {
  state: () => {
    return {
      lat: "",
      lng: "",
    };
  },
});
