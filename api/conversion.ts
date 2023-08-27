import axios from "axios";
import { baseApiUrl } from "@/config-global";

console.log("baseApiUrl", baseApiUrl);

const apiClient = axios.create({
  baseURL: baseApiUrl,
  timeout: 1000 * 60 * 2,
});

export const convertImage = async (imageURL: string): Promise<string> => {
  return apiClient
    .post("/convert", {
      image: imageURL,
    })
    .then((res) => res.data.prediction);
};
