import './MoviesView.scss'
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function MoviesView({ isLogin }) {
  return (
    <section className="movies">
      <Header
        isLogin={isLogin}
      />
      <main className="main">
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </section>
  );
}

export default MoviesView;