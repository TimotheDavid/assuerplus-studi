import axios from "axios";
async function getMapsData() {
  return axios.get("http://localhost:5000/all");
}
export { getMapsData };
//# sourceMappingURL=index.js.map
