import './MoviesView.scss';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';

function MoviesView({ isLogin, movies, likeMovie }) {
  const [search, setSearch] = useState('');
  const [lookShort, setLookShort] = useState(false);
  const [selectedMovies, setSelectedMovies] = useState([]);

  function checkSearch() {
    if (lookShort) {
      const result = movies.filter((m) => {
        const mNameRU = m.nameRU.toLowerCase();
        const mNameEN = m.nameEN.toLowerCase();
        return (
          (mNameRU.includes(search.toLowerCase()) && m.duration <= 40) ||
          (mNameEN.includes(search.toLowerCase()) && m.duration <= 40)
        );
      });
      return result;
    }
    const result = movies.filter((v) => {
      const mNameRU = v.nameRU.toLowerCase();
      const mNameEN = v.nameEN.toLowerCase();
      return (
        mNameRU.includes(search.toLowerCase()) ||
        mNameEN.includes(search.toLowerCase())
      );
    });
    return result;
  }

  useEffect(() => {
    setSelectedMovies(checkSearch());
    localStorage.setItem('searchedMovies', JSON.stringify(selectedMovies));
    JSON.parse(localStorage.getItem('searchedMovies'));
  }, [search, lookShort]);

  useEffect(() => {
    setSelectedMovies(JSON.parse(localStorage.getItem('searchedMovies')));
  }, []);

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
          <MoviesCardList
            selectedMovies={selectedMovies}
            likeMovie={likeMovie}
          />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default MoviesView;
