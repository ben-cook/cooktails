import axios from "axios";

const headers = {
  "Access-Control-Allow-Origin": "*",
};

const baseURL = `www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}`;

export const withCors = (url: string): string => {
  return process.env.REACT_APP_CORS_PROXY_URL + url;
};

export const searchDrinkByName = (name: string) => {
  return axios(withCors(`${baseURL}/search.php?s=${name}`), { headers });
};

export const searchDrinkByFirstLetter = (letter: string) => {
  return axios(withCors(`${baseURL}/search.php?f=${letter}`), { headers });
};

export const getPopularDrinks = () => {
  return axios(withCors(`${baseURL}/popular.php`), { headers });
};

export const getDrinkByID = (id: string) => {
  return axios(withCors(`${baseURL}/lookup.php?i=${id}`), { headers });
};

export const searchIngredientByName = (name: string) => {
  return axios(withCors(`${baseURL}/search.php?i=${name}`), { headers });
};
