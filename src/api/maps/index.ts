import axios, { AxiosResponse } from "axios";

async function getMapsData(): Promise<AxiosResponse> {
  return axios.get("http://localhost:5000/all");
}

export { getMapsData };
