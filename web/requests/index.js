import Cookies from "js-cookie";
import { APIURL } from "../config/api.config";
import { COOKIENAME } from "../config/cookie.config";

async function getRequest(url, token = "") {
  const response = await fetch(APIURL + url, {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + token,
    },
  });

  return response;
}

async function postRequest(url, body) {
  const response = await fetch(APIURL + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + Cookies.get(COOKIENAME),
    },
    body: JSON.stringify(body),
  });

  return response;
}

module.exports = {
  postRequest,
};

async function putRequest(url, body) {
  const response = await fetch(APIURL + url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + Cookies.get(COOKIENAME),
    },
    body: body,
  });

  return response;
}

module.exports = {
  getRequest,
  postRequest,
  putRequest
};