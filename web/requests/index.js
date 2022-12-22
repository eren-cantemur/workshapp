import Cookie from "js-cookie";
import { APIURL } from "../config/api.config";
import { COOKIENAME } from "../config/cookie.config";

async function postRequest(url, body) {
  const response = await fetch(APIURL + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + Cookie.get(COOKIENAME),
    },
    body: JSON.stringify(body),
  });

  return response;
}

module.exports = {
  postRequest,
};
