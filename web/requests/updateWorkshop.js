import { putRequest } from ".";

export default async function updateWorkshopRequest(workshop, workshopId) {
  const response = await putRequest("/workshop/" + workshopId , { workshop });
  
  return response.json();
}
