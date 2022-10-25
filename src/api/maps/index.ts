import axios, { AxiosResponse } from "axios";

async function getMapsData(): Promise<AxiosResponse> {
  return axios.get("https://assureplus-garage.studi.timothedavid.fr/all");
}

export { getMapsData };
