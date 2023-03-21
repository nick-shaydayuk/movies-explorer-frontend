import { useState } from 'react';
import { addMovie, removeMovie } from '../../utils/authApi';
import './MovieCardButton.scss';

function MovieCardButton({ movie }) {
  const [isLike, setIsLike] = useState(false);

  function handleClick() {
    if (!isLike) {
      addMovie(movie).then(() => {
        setIsLike(!isLike);
      })
    } else {
      removeMovie(movie).then(() => {
        setIsLike(!isLike);
      })
    }

  }
  return (
    <button
      className={`movie-button ${isLike ? 'movie-button_like' : ''}`}
      type="button"
      aria-label="Выбрать Фильм"
      onClick={handleClick}
    />
  );
}

export default MovieCardButton;