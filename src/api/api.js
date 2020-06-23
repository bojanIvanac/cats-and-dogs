const API_CAT_KEY = "844121ae-fb7b-41d7-b2b2-2d09c7c1c0ab";

const API_CAT_URL = `https://api.thecatapi.com/v1/images/search?api_key=${API_CAT_KEY}`;
const API_DOG_URL = "https://dog.ceo/api/breeds/image/random";

export const fetchDog = () => {
  return fetch(API_DOG_URL);
};

export const fetchCat = () => {
  return fetch(API_CAT_URL);
};
