import axios from "axios";

const BASE_URL = "https://swapi.dev/api/people";

const get = (route = "") => {
  return axios.get(`${BASE_URL}/${route}`);
};

const post = (route = "", data) => {
  return axios.post(`${BASE_URL}/${route}`, data);
};

export { get as GET, post as POST };
