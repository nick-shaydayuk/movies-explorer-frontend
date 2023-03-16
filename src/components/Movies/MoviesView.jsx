import './MoviesView.scss';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function MoviesView({ isLogin, movies }) {
  return (
    <>
      <Header isLogin={isLogin} />
      <main className="main">
        <section className="movies">
          <SearchForm />
          <MoviesCardList movies={movies} />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default MoviesView;
