import { postRequest } from ".";
import { APIURL } from "../config/api.config";

export default async function loginRequest(email, password) {
  const response = await postRequest("/login", { email, password });

  return response;
}
