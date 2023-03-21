import './MoviesCardList.scss';
import { useLocation } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';

function MovieCardList({ movies, selectedMovies }) {
  const actualPath = useLocation().pathname;

  function handleMoreMovies(evt) {
    console.log(evt);
  }

  return (
    <>
      <ul
        className={`card-list ${
          actualPath === '/saved-movies' ? 'card-list_saved-movies' : ''
        }`}
      >
        {selectedMovies.map((movieCard) => (
          <MovieCard
            key={movieCard.id}
            cardPath={movieCard.image.url}
            title={movieCard.title}
            duracion={movieCard.duration}
            movieCard={movieCard}
          />
        ))}
      </ul>
      {actualPath === '/movies' && (
        <button
          type="button"
          aria-label="Кнопка ещё"
          onClick={handleMoreMovies}
          className="more-button"
        >
          Ещё
        </button>
      )}
    </>
  );
}

export default MovieCardList;
