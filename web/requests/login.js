import { postRequest } from ".";

export default async function loginRequest(email, password) {
  const response = await postRequest("/login", { email, password });
  
  return response.json();
}
