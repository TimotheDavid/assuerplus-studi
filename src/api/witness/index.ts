import http from "../http";
import { AxiosResponse } from "axios";
import { GetWitness } from "../../interface/getWitness";
import { CreateWitness } from "../../interface/CreateWitness";

const BASE_URL = "/witness";

export async function getWitness(
  accidentId: string
): Promise<AxiosResponse<GetWitness[]>> {
  return http.get(BASE_URL + "/" + accidentId);
}

export async function createWitness(
  witness: CreateWitness
): Promise<AxiosResponse> {
  return http.post(BASE_URL, witness);
}
