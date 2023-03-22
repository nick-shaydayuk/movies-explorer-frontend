import './MovieCard.scss';
import { useLocation } from 'react-router-dom';
import MovieCardButton from '../MovieCardButton/MovieCardButton';
import { URL_MOVIES } from '../../utils/consts';

function MovieCard({ cardPath, duracion, movieCard, deleteMovie, likeMovie }) {
  const actualPath = useLocation().pathname;

  function getImageUrl() {
    if (movieCard.id) {
      return `${URL_MOVIES}${cardPath}`;
    }
    return movieCard.image;
  }
  return (
    <li className="movie-item">
      <article className="movie-card">
        <figure className="movie-card__card">
          <img
            className="movie-card__image"
            src={
              actualPath === '/movies'
                ? `${URL_MOVIES}${movieCard.image.url}`
                : getImageUrl()
            }
            alt={movieCard.nameRU}
          />
          <figcaption className="movie-card__info">
            <div className="movie-card__title-wrapper">
              <h2 className="movie-card__title">{movieCard.nameRU}</h2>
              <p className="movie-card__duration">{duracion}</p>
            </div>

            <MovieCardButton movie={movieCard} deleteMovie={deleteMovie} likeMovie={likeMovie} />
          </figcaption>
        </figure>
      </article>
    </li>
  );
}

export default MovieCard;
