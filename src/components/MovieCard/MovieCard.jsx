import './MovieCard.scss';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieCardButton from '../MovieCardButton/MovieCardButton';
import { URL_BASE_MOVIES } from '../../utils/consts';

function MovieCard({ card, saveMovie, deleteMovie, allSavedMovies }) {
  const currentPath = useLocation().pathname;
  const [isLiked, setIsLiked] = useState();

  function calculateDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60 < 10 ? `0${duration % 60}` : duration % 60;

    return hours ? `${hours}ч${minutes}м` : `0ч${minutes}м`;
  }

  function handleClick(evt) {
    deleteMovie(card);
  }

  function getCardUrl() {
    if (card.id) {
      return `${URL_BASE_MOVIES}/${card.image.url}`;
    }
    return card.image;
  }

  useEffect(() => {
    if (currentPath === '/movies') {
      const like = JSON.parse(localStorage.allSavedMovies).find(
        (item) => item.movieId === card.id || item.id === card.id
      );
      setIsLiked(like);
    }
  }, [allSavedMovies]);

  return (
    <li className="movie-item">
      <article className="movie-card">
        <figure className="movie-card__card">
          <img
            className="movie-card__image"
            src={
              currentPath === '/movies'
                ? `${URL_BASE_MOVIES}/${card.image.url}`
                : getCardUrl()
            }
            alt={card.nameRU}
          />
          <figcaption className="movie-card__info">
            <div className="movie-card__title-wrapper">
              <h2 className="movie-card__title">{card.nameRU}</h2>
              <p className="movie-card__duration">
                {calculateDuration(card.duration)}
              </p>
            </div>

            {currentPath === '/saved-movies' ? (
              <button
                type="button"
                onClick={handleClick}
                className="movie-card__remove"
                aria-label="Удалить из сохранённых"
              />
            ) : (
              <MovieCardButton
                card={isLiked ? { ...card, _id: isLiked._id } : card}
                saveMovie={saveMovie}
                deleteMovie={deleteMovie}
                isLiked={!!isLiked}
              />
            )}
          </figcaption>
        </figure>
      </article>
    </li>
  );
}

export default MovieCard;
