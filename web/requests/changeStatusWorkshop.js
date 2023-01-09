import { getRequest } from ".";
export default async function changeStatusWorkshop(id, isApproved) {

  const response = await putRequest("/workshop/changeStatus", {id, isApproved});

  return response.json();
}
