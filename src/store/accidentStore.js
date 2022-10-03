import { defineStore } from "pinia";
export const useAccidentStore = defineStore("accident", {
  state: () => {
    return {
      accidentId: "",
    };
  },
  actions: {
    setToStorage(accidentId) {
      this.accidentId = accidentId;
      localStorage.setItem("accidentId", accidentId);
    },
    getFromStorage() {
      const storage = localStorage.getItem("accidentId");
      if (storage != null) return storage;
    },
  },
});
//# sourceMappingURL=accidentStore.js.map
