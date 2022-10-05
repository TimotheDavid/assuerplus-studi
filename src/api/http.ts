import axios from "axios";
import { useUserStore } from "../store/userStore";

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Authorization: "Bearer ",
  },
});

http.interceptors.request.use((config) => {
  const user = useUserStore();
  if (config.headers != undefined) {
    config.headers.Authorization += user.getToken();
  }
  return config;
});

export default http;
