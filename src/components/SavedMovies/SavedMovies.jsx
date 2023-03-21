import './SavedMovies.scss';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ isLogin, movies }) {

  return (
    <section className="saved-movies">
      <Header isLogin={isLogin} />
      <main className="main">
        <SearchForm />
        <MoviesCardList movies={movies} selectedMovies={movies} />
      </main>
      <Footer />
    </section>
  );
}

export default SavedMovies;
