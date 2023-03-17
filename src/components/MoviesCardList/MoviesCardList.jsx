import './MoviesCardList.scss';
import { useLocation } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';

function MovieCardList({ movies }) {
  const currentPath = useLocation().pathname;

  function handleMovie(evt) {
    console.log(evt);
  }
  return (
    <>
      <ul
        className={`card-list ${
          currentPath === '/saved-movies' ? 'card-list_saved-movies' : ''
        }`}
      >
        {movies.map((movieCard) => (
          <MovieCard
            key={movieCard.id}
            cardPath={movieCard.image.url}
            title={movieCard.title}
            duracion={movieCard.duration}
            movieCard={movieCard}
          />
        ))}
      </ul>
      {currentPath === '/movies' && (
        <button
          type="button"
          aria-label="Кнопка ещё"
          onClick={handleMovie}
          className="more-button"
        >
          Ещё
        </button>
      )}
    </>
  );
}

export default MovieCardList;
