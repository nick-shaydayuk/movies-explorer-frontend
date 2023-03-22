import './MoviesCardList.scss';
import { useLocation } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';

function MovieCardList({ selectedMovies, deleteMovie, likeMovie }) {
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
            key={actualPath === '/saved-movies' ? movieCard._id : movieCard.id}
            cardPath={movieCard.image.url}
            title={movieCard.title}
            duracion={movieCard.duration}
            movieCard={movieCard}
            deleteMovie={deleteMovie}
            likeMovie={likeMovie}
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
