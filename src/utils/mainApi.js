import { URL_MOVIES } from './consts';
import { checkResponse } from './authApi';

export const loadMovies = async () => {
  const res = await fetch(`${URL_MOVIES}/movies`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return checkResponse(res);
};
