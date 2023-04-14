import './MoviesCardList.scss';
import { useLocation } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import useInitialCards from '../../utils/useInitialCards';
import useGetScreenWidth from '../../utils/useGetScreenWidth';
import { useEffect, useState } from 'react';

function MovieCardList({ selectedMovies, deleteMovie, likeMovie, myMovies }) {
  const actualPath = useLocation().pathname;
  const screenWidth = useGetScreenWidth();
  const initialCards = useInitialCards(screenWidth);
  const [initialMovies, setInitialMovies] = useState([]);
  const [counter, setCounter] = useState(0);

  function handleMoreMovies() {
    setInitialMovies([
      ...initialMovies,
      ...selectedMovies.slice(counter, counter + initialCards.add),
    ]);
    setCounter(counter + initialCards.add);
  }

  useEffect(() => {
    if (!actualPath == '/movies') return;
    setInitialMovies(selectedMovies.slice(0, initialCards.start));
    setCounter(initialCards.start);
  }, [selectedMovies]);

  return (
    <>
      <ul
        className={`card-list ${
          actualPath === '/saved-movies' ? 'card-list_saved-movies' : ''
        }`}
      >
        {initialMovies.map((movieCard) => (
          <MovieCard
            key={actualPath === '/saved-movies' ? movieCard._id : movieCard.id}
            cardPath={movieCard.image.url}
            title={movieCard.title}
            duration={movieCard.duration}
            movieCard={movieCard}
            deleteMovie={deleteMovie}
            likeMovie={likeMovie}
            myMovies={myMovies}
          />
        ))}
      </ul>
      {selectedMovies.length === 0 ? (
        <p className="card-list__empty">
          Тут пока ничего, но обязательно появится!
        </p>
      ) : (
        <></>
      )}
      {actualPath === '/movies' && selectedMovies.length > counter ? (
        <button
          type="button"
          aria-label="Мало фильмов? Жми!"
          onClick={handleMoreMovies}
          className="more-button"
        >
          Ещё
        </button>
      ) : (
        <></>
      )}
    </>
  );
}

export default MovieCardList;
