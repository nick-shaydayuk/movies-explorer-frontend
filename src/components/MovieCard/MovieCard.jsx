import './MovieCard.scss';
import { useLocation } from 'react-router-dom';
import MovieCardButton from '../MovieCardButton/MovieCardButton';
import { URL_MOVIES } from '../../utils/consts';

function MovieCard({ cardPath, duracion, movieCard }) {
  const actualPath = useLocation().pathname;

  function getImageUrl() {
    if (movieCard.id) {
      return `${URL_MOVIES}${cardPath}`;
    }
    return movieCard.image;
  }

  function handleClick(evt) {
    console.log(evt);
  }
  return (
    <li className="movie-item">
      <article className="movie-card">
        <figure className="movie-card__card">
          <img
            className="movie-card__image"
            src={actualPath === '/movies' ? `${URL_MOVIES}${movieCard.image.url}` : getImageUrl()}
            alt={movieCard.nameRU}
          />
          <figcaption className="movie-card__info">
            <div className="movie-card__title-wrapper">
              <h2 className="movie-card__title">{movieCard.nameRU}</h2>
              <p className="movie-card__duration">{duracion}</p>
            </div>

            {actualPath === '/saved-movies'
              ? (
                <button
                  type="button"
                  onClick={handleClick}
                  className="movie-card__remove"
                  aria-label="Удалить из сохранённых"
                />
              )
              : <MovieCardButton movie={movieCard} />}
          </figcaption>
        </figure>
      </article>
    </li>
  );
}

export default MovieCard;