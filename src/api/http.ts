import axios from "axios";

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Authorization: "",
  },
});

http.interceptors.request.use(function (config) {
  return config;
});

export default http;
