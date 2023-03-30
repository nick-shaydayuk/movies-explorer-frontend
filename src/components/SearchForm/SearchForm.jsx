import './SearchForm.scss';
import searchSubmit from '../../images/search-submit.svg';
import { useEffect } from 'react';

function SearchForm({ search, setSearch, lookShort, setLookShort }) {

  function handleChange(e) {
    setSearch(e.target.value)
    localStorage.setItem('search', e.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  function handleClick() {
    setLookShort(!lookShort);
    localStorage.setItem('lookShort', !lookShort)
    console.log('cheked');
  }

  useEffect(() => {
    setSearch(localStorage.getItem('search'))
  }, [])

  return (
    <div className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit}>
        <div className="search-form__container">
          <div className="search-form__input-container">
            <input
              type="text"
              className="search-form__input"
              placeholder="Фильм"
              value={search}
              onChange={e => handleChange(e)}
              required
            />
          </div>
          <div className="search-form__button-container">
            <button
              type="submit"
              className="search-form__submit"
              aria-label="Найти фильм"
            >
              <img src={searchSubmit} className="search-form__submit-icon" />
            </button>
            <div className="search-form__radio-wrapper">
              <button
                type="button"
                aria-label={
                  lookShort ? 'Выбрать короткометражки' : 'Выбрать любые фильмы'
                }
                className={`search-form__radio ${
                  lookShort
                    ? 'search-form__radio_marked'
                    : 'search-form__radio_not-marked'
                }`}
                onClick={handleClick}
              />
              <p className="search-form__button-subtitle">Короткометражки</p>
            </div>
          </div>
        </div>
        <div className="search-form__button-container search-form__button-container_mobile">
          <button
            type="submit"
            className="search-form__submit"
            aria-label="Найти фильм"
          >
            <img src={searchSubmit} className="search-form__submit-icon" />
          </button>
          <div className="search-form__radio-wrapper">
            <button
              type="button"
              aria-label={
                lookShort ? 'Выбрать короткометражки' : 'Выбрать любые фильмы'
              }
              className={`search-form__radio ${
                lookShort
                  ? 'search-form__radio_marked'
                  : 'search-form__radio_not-marked'
              }`}
              onClick={handleClick}
            />
            <p className="search-form__button-subtitle">Короткометражки</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
