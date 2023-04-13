import './MovieCardButton.scss';
import { useLocation } from 'react-router-dom';

function MovieCardButton({ isLike, handleClick }) {
  const actualPath = useLocation().pathname;

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
