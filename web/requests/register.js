import { postRequest } from ".";

export default async function registerRequest(email, password) {
  const role = "workshopManager";
  const response = await postRequest("/register", { email, password, role});
  
  return response.json();
}
