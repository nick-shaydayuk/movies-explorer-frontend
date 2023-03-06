import './MoviesView.scss';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function MoviesView({
  isLogin,
  searchedMovies,
  searchMovies,
  changeDuration,
  isShort,
  saveMovie,
  deleteMovie,
  allSavedMovies,
  renderInfoMessage,
}) {
  return (
    <section className="movies">
      <Header isLogin={isLogin} />
      <main className="main">
        <SearchForm
          searchMovies={searchMovies}
          changeDuration={changeDuration}
          isShort={isShort}
          renderInfoMessage={renderInfoMessage}
        />
        <MoviesCardList
          searchedMovies={searchedMovies}
          saveMovie={saveMovie}
          deleteMovie={deleteMovie}
          allSavedMovies={allSavedMovies}
        />
      </main>
      <Footer />
    </section>
  );
}

export default MoviesView;
