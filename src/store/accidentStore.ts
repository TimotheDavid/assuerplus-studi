import { defineStore } from "pinia";

export const useAccidentStore = defineStore("accident", {
  state: () => {
    return {
      accidentId: "",
    };
  },
  actions: {
    setToStorage(accidentId: string) {
      this.accidentId = accidentId;
      localStorage.setItem("accidentId", accidentId);
    },
    getFromStorage() {
      const storage = localStorage.getItem("accidentId");
      if (storage != null) return storage;
    },
  },
});
