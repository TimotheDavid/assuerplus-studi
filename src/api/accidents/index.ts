import http from "../http";
import { AxiosResponse } from "axios";
import { UpdateDriver } from "../../interface/update.driver";
import { UpdateDescription } from "../../interface/update.description";
import { UpdateLocations } from "../../interface/update.locations";

const BASE_URL = "/accidents";

export async function createAccident(
  userId: string
): Promise<AxiosResponse<{ id: string }>> {
  return http.post(BASE_URL, { userId });
}

export async function updateDriver(
  driver: UpdateDriver
): Promise<AxiosResponse> {
  return http.put(BASE_URL + "/driver", driver);
}

export async function updateDescription(
  description: UpdateDescription
): Promise<AxiosResponse> {
  return http.put(BASE_URL + "/description", description);
}

export async function updatelocations(
  location: UpdateLocations
): Promise<AxiosResponse> {
  return http.put(BASE_URL + "/location", location);
}

export async function getDriver(accidentId: string): Promise<AxiosResponse> {
  return http.get(BASE_URL + "/" + accidentId);
}
