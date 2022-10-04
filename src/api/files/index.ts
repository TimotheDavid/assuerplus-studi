import http from "../http";
import { AxiosResponse } from "axios";
import { CreateAccident } from "../../interface/CreateAccident";

export function upload(data: CreateAccident): Promise<AxiosResponse> {
  return http.post(`/pictures?id=${data.accidentId}`, data.file, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
