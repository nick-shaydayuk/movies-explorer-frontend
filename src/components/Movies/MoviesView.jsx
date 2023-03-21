import './MoviesView.scss';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';

function MoviesView({ isLogin, movies }) {
  const [search, setSearch] = useState('');
  const [lookShort, setLookShort] = useState(false);
  const [selectedMovies, setSelectedMovies] = useState([]);

  useEffect(() => {
    setSelectedMovies(
      movies.filter((v) => {
        const mNameRU = v.nameRU.toLowerCase();
        const mNameEN = v.nameEN.toLowerCase();
        return (
          mNameRU.includes(search.toLowerCase()) ||
          mNameEN.includes(search.toLowerCase())
        );
      })
    );
  }, [search]);

  return (
    <>
      <Header isLogin={isLogin} />
      <main className="main">
        <section className="movies">
          <SearchForm
            search={search}
            setSearch={setSearch}
            lookShort={lookShort}
            setLookShort={setLookShort}
          />
          <MoviesCardList movies={movies} selectedMovies={selectedMovies} />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default MoviesView;
