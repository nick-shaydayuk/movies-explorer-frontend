import './SavedMovies.scss';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useState, useEffect } from 'react';
import { SHORT_MOVIE_DURATION } from '../../utils/consts';

function SavedMovies({ isLogin, movies, deleteMovie }) {
  const [search, setSearch] = useState('');
  const [lookShort, setLookShort] = useState(false);
  const [selectedMovies, setSelectedMovies] = useState([]);

  function checkSearch() {
    if (lookShort) {
      const result = movies.filter((m) => {
        const mNameRU = m.nameRU.toLowerCase();
        const mNameEN = m.nameEN.toLowerCase();
        return (
          (mNameRU.includes(search.toLowerCase()) &&
            m.duration <= SHORT_MOVIE_DURATION) ||
          (mNameEN.includes(search.toLowerCase()) &&
            m.duration <= SHORT_MOVIE_DURATION)
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
  }, [search, movies, lookShort]);

  return (
    <section className="saved-movies">
      <Header isLogin={isLogin} />
      <main className="main">
        <SearchForm
          search={search}
          setSearch={setSearch}
          lookShort={lookShort}
          setLookShort={setLookShort}
        />
        <MoviesCardList
          selectedMovies={selectedMovies}
          deleteMovie={deleteMovie}
        />
      </main>
      <Footer />
    </section>
  );
}

export default SavedMovies;
