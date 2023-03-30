import './SavedMovies.scss';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useState, useEffect } from 'react';

function SavedMovies({ isLogin, movies, deleteMovie }) {
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
    localStorage.setItem(
      'searchedMyMovies',
      JSON.stringify(movies.filter((v) => {
        const mNameRU = v.nameRU.toLowerCase();
        const mNameEN = v.nameEN.toLowerCase();
        return (
          mNameRU.includes(search.toLowerCase()) ||
          mNameEN.includes(search.toLowerCase())
        );
      }))
    );
  }, [search, movies]);

  useEffect(() => {
    setSelectedMovies(JSON.parse(localStorage.getItem('searchedMyMovies')));
  }, [])

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
