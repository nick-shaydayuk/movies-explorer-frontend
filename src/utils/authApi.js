import { URL_AUTH, URL_MOVIES } from './consts';

export function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
}

export const signup = async (name, email, password) => {
  const res = await fetch(`${URL_AUTH}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });
  return checkResponse(res);
};

export const login = async (email, password) => {
  const res = await fetch(`${URL_AUTH}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return checkResponse(res);
};

export const logout = async () => {
  const res = await fetch(`${URL_AUTH}/signout`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return checkResponse(res);
};

export const getMyData = async () => {
  const res = await fetch(`${URL_AUTH}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  return checkResponse(res);
};

export const changeMyData = async ({ email, name }) => {
  const res = await fetch(`${URL_AUTH}/users/me`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email, name }),
  });
  return checkResponse(res);
};

export const loadMyMovies = async () => {
  const res = await fetch(`${URL_AUTH}/movies`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  return checkResponse(res);
};

export const addMovie = async ({
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  owner,
  movieId,
  nameRU,
  nameEN,
}) => {
  const res = await fetch(`${URL_AUTH}/movies`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image: `${URL_MOVIES}/${image.url}`,
      trailerLink,
      thumbnail: `${URL_MOVIES}/${image.formats.thumbnail.url}`,
      owner,
      movieId,
      nameRU,
      nameEN,
    }),
  });
  return checkResponse(res);
};

export const removeMovie = async (_id) => {
  const res = await fetch(`${URL_AUTH}/movies/${_id}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  return checkResponse(res);
};
