import './MoviesView.scss';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';

function MoviesView({ isLogin, movies, myMovies, likeMovie, deleteMovie, isPreloaderOpen }) {
  const [search, setSearch] = useState('');
  const [lookShort, setLookShort] = useState(false);
  const [selectedMovies, setSelectedMovies] = useState(movies);

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
    if (search === '' && !localStorage.getItem('lookShort')) {
      setSelectedMovies(movies);
      return;
    }
    setSelectedMovies(checkSearch());
    localStorage.setItem('searchedMovies', JSON.stringify(selectedMovies));
  }, [search, lookShort]);

  useEffect(() => {
    if (localStorage.getItem('search')) {
      setSearch(localStorage.getItem('search'));
    }
    if (localStorage.getItem('lookShort')) {
      if (localStorage.getItem('lookShort') === 'true') {
        setLookShort(true);
      }
      if (localStorage.getItem('lookShort') === 'false') {
        setLookShort(false);
      }
    }

    if (localStorage.getItem('searchedMovies')) {
      setSelectedMovies(JSON.parse(localStorage.getItem('searchedMovies')));
    }
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
            deleteMovie={deleteMovie}
            myMovies={myMovies}
            isPreloaderOpen={isPreloaderOpen}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default MoviesView;
