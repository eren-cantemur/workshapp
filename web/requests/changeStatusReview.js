import { getRequest } from ".";
export default async function changeStatusReview(id, isApproved) {

  const response = await putRequest("/review/changeStatus", {id, isApproved});

  return response.json();
}
