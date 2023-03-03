import { useState } from 'react';
import './MovieCardButton.scss';

function MovieCardButton() {
  const [isLike, setIsLike] = useState(false);

  function handleClick() {
    setIsLike(!isLike);
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