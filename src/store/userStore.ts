import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      userId: "",
      token: "",
    };
  },
  actions: {
    resetToken() {
      localStorage.removeItem("token");
    },
    setUserId() {
      localStorage.setItem("userId", this.userId);
    },
    setToken(token: string) {
      localStorage.setItem("token", token);
    },
    getToken() {
      const token = localStorage.getItem("token");
      if (token !== null) {
        this.token = token;
      }
      return this.token;
    },
    getUserId() {
      localStorage.getItem("userId");
    },
  },
});
