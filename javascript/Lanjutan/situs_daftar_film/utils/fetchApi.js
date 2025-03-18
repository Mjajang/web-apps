import config from "../config.js";
export const fetchApi = async (method, path) => {
  try {
    const response = await fetch(`${config.BASE_URL}${path}`, {
      method: method,
      headers: {
        "x-rapidapi-key": config.API_KEY,
        "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
      },
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was a problem with the fetch operation: ", error);
  }
};
