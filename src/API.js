const BASE_URL = 'https://swapi.dev/api';

const getAllPeople = () => {
  return fetch(BASE_URL + '/people')
    .then((res) => res.json())
    .catch((error) => console.error(error));
};

const getFilms = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => console.error(error));
};

export default { getAllPeople, getFilms };
