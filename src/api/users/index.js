import http from "../http";
const BASE_URL = "/users";
function loginUser(user) {
  return http.post(BASE_URL + "/login", user);
}
export { loginUser };
//# sourceMappingURL=index.js.map
