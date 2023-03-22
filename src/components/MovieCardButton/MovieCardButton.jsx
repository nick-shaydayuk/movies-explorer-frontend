import { useState, useContext } from 'react';
import './MovieCardButton.scss';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useLocation } from 'react-router-dom';

function MovieCardButton({ movie, deleteMovie, likeMovie }) {
  const [isLike, setIsLike] = useState(false);

  const actualPath = useLocation().pathname;

  const user = useContext(CurrentUserContext);

  function handleClick() {
    if (!isLike && actualPath !== '/saved-movies') {
      likeMovie(movie, user)
      setIsLike(true);
    } else {
      deleteMovie(movie._id)
      setIsLike(false);
    }
  }
  return (
    <button
      className={`movie-button ${isLike ? 'movie-button_like' : ''} ${
        actualPath === '/saved-movies' ? 'movie-button_remove' : ''
      }`}
      type="button"
      aria-label="Выбрать Фильм"
      onClick={handleClick}
    />
  );
}

export default MovieCardButton;
