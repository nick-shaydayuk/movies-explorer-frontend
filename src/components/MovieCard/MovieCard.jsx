import './MovieCard.scss';
import { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MovieCardButton from '../MovieCardButton/MovieCardButton';
import { URL_MOVIES_IMG } from '../../utils/consts';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function MovieCard({ cardPath, duration, movieCard, deleteMovie, likeMovie, myMovies }) {

  const [isLike, setIsLike] = useState(false);

  const actualPath = useLocation().pathname;
  const user = useContext(CurrentUserContext);

  function getImageUrl() {
    if (movieCard.id) {
      return `${URL_MOVIES_IMG}${cardPath}`;
    }
    return movieCard.image;
  }

  function handleClick() {
    if (!isLike && actualPath !== '/saved-movies') {
      likeMovie(movieCard, user)
      setIsLike(true);
    } else {
      if (!movieCard._id) {
        const movie = JSON.parse(localStorage.getItem('myMovies'))
        .find((item) => item.movieId === movieCard.id || item.id === movieCard.id);
        deleteMovie(movie)
        setIsLike(false)
        return
      }
      deleteMovie(movieCard)
      setIsLike(false);
    }
  }

  useEffect(() => {
    if (actualPath === '/movies') {
      const like = myMovies
        .find((item) => item.movieId === movieCard.id || item.id === movieCard.id);
      setIsLike(like);
    }
  }, [myMovies])

  return (
    <li className="movie-item">
      <article className="movie-card">
        <figure className="movie-card__card">
          <a href={`${movieCard.trailerLink}`} target="blank">
            <img
              className="movie-card__image"
              src={
                actualPath === '/movies'
                  ? `${URL_MOVIES_IMG}${movieCard.image.url}`
                  : getImageUrl()
              }
              alt={movieCard.nameRU}
            />
          </a>
          <figcaption className="movie-card__info">
            <div className="movie-card__title-wrapper">
              <h2 className="movie-card__title">{movieCard.nameRU}</h2>
              <p className="movie-card__duration">{duration}</p>
            </div>

            <MovieCardButton
              handleClick={handleClick}
              isLike={isLike}
            />
          </figcaption>
        </figure>
      </article>
    </li>
  );
}

export default MovieCard;
