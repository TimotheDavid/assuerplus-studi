import http from "../http";
const BASE_URL = "/accidents";
export async function createAccident(userId) {
  return http.post(BASE_URL, { userId });
}
export async function updateDriver(driver) {
  return http.put(BASE_URL + "/driver", driver);
}
export async function updateDescription(description) {
  return http.put(BASE_URL + "/description", description);
}
export async function updatelocations(location) {
  return http.put(BASE_URL + "/location", location);
}
//# sourceMappingURL=index.js.map
