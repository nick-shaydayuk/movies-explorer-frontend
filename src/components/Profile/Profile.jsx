import './Profile.scss';
import { useState } from 'react';
import Header from '../Header/Header';

function Profile({ signOut, isLogin }) {
  const [isOnEdit, setIsOnEdit] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setIsOnEdit(!isOnEdit);
  }
  function handleEditClick() {
    setIsOnEdit(true);
  }
  return (
    <>
      <Header
        isLogin={isLogin}
      />
      <main className="main">
        <section className="profile">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <form className="form-profile" onSubmit={handleSubmit}>
            <label htmlFor="name" className="form-profile__user-data">
              <p className="form-profile__input-name">Имя</p>
              <input
                id="name"
                name="name"
                className="form-profile__input"
                type="text"
                minLength="2"
                maxLength="30"
                required
                disabled={!isOnEdit}
              />
            </label>

            <label htmlFor="Email" className="form-profile__user-data">
              <p className="form-profile__input-name">E-mail</p>
              <input
                id="Email"
                name="Email"
                className="form-profile__input"
                type="Email"
                required
                disabled={!isOnEdit}
              />
            </label>
            <span className="form-profile__error form-profile__error_type_email"> </span>
            {isOnEdit && (
            <>
              <span className="form-profile__error-serv">Ошибка сервера</span>
              <button type="submit" className="form-profile__submit">Сохранить</button>
            </>
            )}
          </form>
          {!isOnEdit && (
          <>
            <button type="button" onClick={handleEditClick} className="profile__edit">Редактировать</button>
            <button type="button" onClick={signOut} className="profile__signout">Выйти из аккаунта</button>
          </>
          )}
        </section>
      </main>
    </>
  );
}

export default Profile;