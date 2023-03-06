import { URL_BASE, URL_BASE_MOVIES } from './consts';

class MainApi {
  constructor({ baseUrl, baseMoviesUrl, headers }) {
    this._baseMoviesUrl = baseMoviesUrl;
    this._baseUrl = baseUrl;
    this._userUrl = `${this._baseUrl}/users/me`;
    this._moviesUrl = `${this._baseUrl}/movies`;
    this._headers = headers;
  }

  static _checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(res.status));
  };

  async getUserData() {
    const res = await fetch(this._userUrl, {
      credentials: 'include',
      headers: this._headers,
    });
    return MainApi._checkResponse(res);
  }

  async changeUserData(email, name) {
    const res = await fetch(this._userUrl, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        email,
        name,
      }),
    });
    return MainApi._checkResponse(res);
  }

  async saveClientMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    id,
  }) {
    const res = await fetch(this._moviesUrl, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image: `${this._baseMoviesUrl}/${image.url}`,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail: `${this._baseMoviesUrl}/${image.formats.thumbnail.url}`,
        movieId: id,
      }),
    });
    return MainApi._checkResponse(res);
  }

  async getClientMovies() {
    const res = await fetch(this._moviesUrl, {
      credentials: 'include',
      headers: this._headers,
    });
    return MainApi._checkResponse(res);
  }

  async deleteClientMovie(_id) {
    const res = await fetch(`${this._moviesUrl}/${_id}`, {
      method: 'DELETE',
      headers: this._headers,
    });
    return MainApi._checkResponse(res);
  }
}

const mainApi = new MainApi({
  baseUrl: URL_BASE,
  baseMoviesUrl: URL_BASE_MOVIES,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default mainApi;
