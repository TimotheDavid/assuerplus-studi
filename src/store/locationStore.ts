import { defineStore } from "pinia";

export const uselocationStore = defineStore("location", {
  state: () => {
    return {
      lat: "48.856614",
      lng: "2.3522219",
    };
  },
});
