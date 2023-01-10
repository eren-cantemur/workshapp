import { getRequest } from ".";
export default async function getProfileData(token) {

  const response = await getRequest("/workshopManager", token);

  return response.json();
}
