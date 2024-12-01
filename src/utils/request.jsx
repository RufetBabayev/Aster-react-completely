import { getStorage, removeStorage } from "../storage/storage";
import { objectToQueryString } from "./helpers";

const base_URL = import.meta.env.VITE_API_URL;
const urlWeather = import.meta.env.VITE_WEATHER_URL;

const request = async (base_URL, url, method, params = false) => {
  const token = getStorage("token");
  let headers = {
    Accept: "application/json",
  };

  let options = {
    method,
    headers,
  };

  if (params) {
    options.body = JSON.stringify(params);
    headers["Content-Type"] = "application/json";
    // post commment to news
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }

  const api = await fetch(base_URL + url, options);

  if (api.ok) {
    return await api.json();
  } else if (api.status === 404) {
    return { status: 404 };
  } else if (api.status === 401) {
    removeStorage("token");
    removeStorage("user");
    location.reload();
    return false;
  } else if (api.status === 422) {
    const errorMessage = await api.json();
    return { status: 422, message: errorMessage };
  } else {
    return { status: 500 };
  }
};

export const get = (url, params = false) =>
  request(
    base_URL,
    url + (params ? "?" + objectToQueryString(params) : ""),
    "GET"
  );

export const post = (url, params) => request(base_URL, url, "POST", params);
export const destroy = (url) => request(base_URL, url, "DELETE");
export const getWeather = (url) => request(urlWeather, url, "GET");
