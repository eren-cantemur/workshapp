import { getRequest } from ".";
export default async function getAllWorkshops(token) {

  const response = await getRequest("/workshop", token);
  
  return response.json();
}
