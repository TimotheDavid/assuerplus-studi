import http from "../http";
import { AxiosResponse } from "axios";
interface loginI {
  email: string;
  password: string;
}

const BASE_URL = "/users";

function loginUser(user: loginI): Promise<AxiosResponse> {
  return http.post(BASE_URL + "/login", user);
}

export { loginUser };
