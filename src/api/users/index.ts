import http from "../http";
import { AxiosResponse } from "axios";
import axios from "axios";
interface loginI {
  email: string;
  password: string;
}

const BASE_URL = "/users";

function loginUser(user: loginI): Promise<AxiosResponse> {
  return axios.post(process.env.VUE_APP_API_URL + BASE_URL + "/login", user);
}

export { loginUser };
