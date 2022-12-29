import { postRequest } from ".";

export default async function loginRequest(email, password, isAdmin) {
  const response = await postRequest("/login", {
    email,
    password,
    role: isAdmin ? "admin" : "workshopManager",
  });

  return response.json();
}
