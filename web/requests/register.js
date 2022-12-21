import { postRequest } from ".";
import { APIURL } from "../config/api.config";

export default async function registerRequest(email, password) {
  console.log("registerRequest");
  const response = await postRequest("/register", { email, password });

  return response;
}
