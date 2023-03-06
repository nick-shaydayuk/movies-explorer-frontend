import './SearchForm.scss';
import { useState, useEffect } from 'react';
import search from '../../images/search.svg';
import { useLocation } from 'react-router-dom';
import useForm from '../../utils/useForm';

function SearchForm({
  searchMovies,
  changeDuration,
  isShort,
  renderInfoMessage,
}) {
  const currentPath = useLocation().pathname;
  const [isChecked, setIsChecked] = useState(true);
  const [shortSearch, setShortSearch] = useState(false);
  const isSavedMovies = currentPath !== '/movies';

  const {
    values, handleChange, errors, setValues,
  } = useForm();

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!values.search && !values.searchSavedMovies && !shortSearch) {
      const error = true;
      renderInfoMessage({ message: 'Введите ключевое слово' }, error);
      return;
    }
    setShortSearch(!shortSearch);
    searchMovies(
      currentPath === '/movies' ? values.search : values.searchSavedMovies,
      isSavedMovies
    );
  }

  useEffect(() => {
    if (!isSavedMovies) {
      const localSearch = localStorage.getItem('valueSearch');
      if (localSearch) {
        setValues({ search: localSearch });
      }
    }
  }, []);

  function handleClick() {
    if (!isSavedMovies && !values.search) {
      return;
    }
    setShortSearch(true);
    changeDuration(isSavedMovies);
    setIsChecked(!isChecked);
  }
  return (
    <div className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit}>
        <div className="search-form__search-container">
          <div className="search-form__input-container">
            <img src={search} />
            <input
              type="text"
              className="search-form__input"
              placeholder="Фильм"
              name={currentPath === '/movies' ? 'search' : 'searchSavedMovies'}
              value={
                currentPath === '/movies'
                  ? values.search || ''
                  : values.searchSavedMovies || ''
              }
              onChange={handleChange}
            />
          </div>
          <div className="search-form__button-container">
            <button
              type="submit"
              className="search-form__submit"
              aria-label="Найти фильм"
            >
              <img src={search} className="search-form__submit-icon" />
            </button>
            <div className="search-form__radio-wrapper">
              <button
                type="button"
                aria-label={
                  isChecked ? 'Выбрать короткометражки' : 'Выбрать любые фильмы'
                }
                className={`search-form__radio ${
                  isChecked
                    ? 'search-form__radio_marked'
                    : 'search-form__radio_not-marked'
                }`}
                onClick={handleClick}
              />
              <p className="search-form__button-subtitle">Короткометражки</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
