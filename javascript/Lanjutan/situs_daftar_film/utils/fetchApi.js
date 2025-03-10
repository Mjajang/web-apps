import config from "../config.js";
export const fetchApi = async (method, path) => {
  const response = await fetch(`${config.BASE_URL}${path}`, {
    method: method,
    headers: {
      "x-rapidapi-key": config.API_KEY,
      "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
    },
  });

  const result = await response.json();
  return result;
};
