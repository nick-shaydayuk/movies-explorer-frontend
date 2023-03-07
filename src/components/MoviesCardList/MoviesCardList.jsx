import './MoviesCardList.scss';
import { useLocation } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import useStartSet from '../../utils/useStartSet';
import useScreenWidth from '../../utils/useWidthScreen';
import { useState, useEffect } from 'react';

function MovieCardList({
  searchedMovies,
  saveMovie,
  deleteMovie,
  allSavedMovies,
}) {
  const currentPath = useLocation().pathname;

  const widthScreen = useScreenWidth();
  const startSet = useStartSet(widthScreen);
  const [count, setCount] = useState(0);
  const [startMovies, setStartMovies] = useState([]);

  useEffect(() => {
    if (currentPath === '/movies') {
      const start = 0;
      const end = startSet.start;
      setStartMovies(searchedMovies.slice(start, end));
      setCount(end);
    }
  }, [searchedMovies]);

  function handleMovie() {
    setStartMovies([
      ...startMovies,
      ...searchedMovies.slice(count, count + startSet.step),
    ]);
    setCount(count + startSet.step);
  }

  function moreButton() {
    if (searchedMovies.length > count) {
      return (
        <button
          type="button"
          aria-label="Кнопка ещё"
          onClick={handleMovie}
          className="more-button"
        >
          Ещё
        </button>
      );
    }
    return '';
  }

  return (
    <>
      <ul
        className={`card-list ${
          currentPath === '/saved-movies' ? 'card-list_saved-movies' : ''
        }`}
      >
        {currentPath === '/movies'
          ? startMovies.map((movieCard) => (
              <MovieCard
                key={movieCard.id}
                card={movieCard}
                saveMovie={saveMovie}
                deleteMovie={deleteMovie}
                allSavedMovies={allSavedMovies}
              />
            ))
          : searchedMovies.map((movieCard) => (
              <MovieCard
                key={movieCard._id || movieCard.id || movieCard}
                deleteMovie={deleteMovie}
                card={movieCard}
              >${movieCard}</MovieCard>
            ))}
      </ul>
      <p className="card-list__not-found">
        {searchedMovies.length === 0 ? 'Ничего не найдено.' : ''}
      </p>
      {currentPath === '/movies' ? moreButton() : null}
    </>
  );
}

export default MovieCardList;
