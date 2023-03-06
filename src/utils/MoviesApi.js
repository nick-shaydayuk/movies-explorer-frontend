import { URL_MOVIES } from './consts';

class MoviesApi {
  constructor({ moviesUrl, headers }) {
    this._moviesUrl = moviesUrl;
    this._headers = headers;
  }

  async getMovies() {
    console.log(1);
    const res = await fetch(this._moviesUrl, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    });
    if (res.ok) {
      return res.json();
    }
    return await Promise.reject(new Error(`Ошибка: ${res.status}`));
  }
}

const moviesApi = new MoviesApi({
  moviesUrl: URL_MOVIES,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default moviesApi;