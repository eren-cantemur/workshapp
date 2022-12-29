import { putRequest } from ".";

export default async function updateProfileRequest(profile) {
  const response = await putRequest("/workshopManager", profile);
  
  return response.json();
}
