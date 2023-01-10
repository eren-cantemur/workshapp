import { postRequest } from ".";

export default async function createWorkshopRequest(workshop) {
  const response = await postRequest("/workshop", { workshop });
  
  return response.json();
}
