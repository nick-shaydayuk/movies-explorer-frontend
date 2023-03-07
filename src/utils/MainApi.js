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

  async saveClientMovie(card, owner) {
    console.log(card);
    const res = await fetch(this._moviesUrl, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: `${this._baseMoviesUrl}/${card.image.url}`,
        trailerLink: card.trailerLink,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
        thumbnail: `${this._baseMoviesUrl}/${card.image.formats.thumbnail.url}`,
        movieId: card.id,
        owner: {
          email: owner.email,
          name: owner.name,
        },
      }),
    });
    return MainApi._checkResponse(res);
  }

  async getClientMovies() {
    const res = await fetch(this._moviesUrl, {
      headers: this._headers,
      credentials: 'include',
    });
    return MainApi._checkResponse(res);
  }

  async deleteClientMovie(_id) {
    const res = await fetch(`${this._moviesUrl}/${_id}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
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
