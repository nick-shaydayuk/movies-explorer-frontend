import './SavedMovies.scss';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect } from 'react';

function SavedMovies({
  isLogin,
  searchedMovies,
  deleteMovie,
  searchMovies,
  changeDuration,
  isShort,
  allSavedMovies,
  setMovie,
  setDuration,
  renderInfoMessage,
}) {
  useEffect(() => {
    setMovie();
  }, []);

  useEffect(() => {
    setDuration();
  }, []);

  return (
    <section className="saved-movies">
      <Header isLogin={isLogin} />
      <main className="main">
        <SearchForm
          searchMovies={searchMovies}
          changeDuration={changeDuration}
          isShort={isShort}
          renderInfoMessage={renderInfoMessage}
        />
        <MoviesCardList
          isSavedMovies={allSavedMovies}
          searchedMovies={searchedMovies}
          deleteMovie={deleteMovie}
        />
      </main>
      <Footer />
    </section>
  );
}

export default SavedMovies;
