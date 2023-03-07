import './MovieCardButton.scss';

function MovieCardButton({
  card, saveMovie, deleteMovie, isLiked,
}) {


  const handleClick = () => {
    if (!isLiked) {
      saveMovie(card);
      return;
    }
    deleteMovie(card);
  }
  return (
    <button
      className={`movie-button ${isLiked ? 'movie-button_like' : ''}`}
      type="button"
      aria-label="Выбрать Фильм"
      onClick={handleClick}
    />
  );
}

export default MovieCardButton;