import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      userId: "",
    };
  },
  actions: {
    setUserId() {
      localStorage.setItem("userId", this.userId);
    },
    getUserId() {
      localStorage.getItem("userId");
    },
  },
});
//# sourceMappingURL=userStore.js.map
