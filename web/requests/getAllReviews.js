import { getRequest } from ".";
export default async function getAllReviews(token) {

  const response = await getRequest("/review", token);

  return response.json();
}
