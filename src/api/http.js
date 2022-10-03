import axios from "axios";
const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: "",
  },
});
http.interceptors.request.use(function (config) {
  return config;
});
export default http;
//# sourceMappingURL=http.js.map
