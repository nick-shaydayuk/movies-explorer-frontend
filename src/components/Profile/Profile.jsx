import './Profile.scss';
import { useState, useContext, useEffect } from 'react';
import Header from '../Header/Header';
import CurrentuserContext from '../../contexts/CurrentUserContext';

function Profile({ signOut, isLogin }) {
  const [isOnEdit, setIsOnEdit] = useState(false);
  const [isValid, setIsValid] = useState(true)

  const user = useContext(CurrentuserContext);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  });

  function handleSubmit(e) {
    e.preventDefault();
    setIsOnEdit(!isOnEdit);
  }

  function handleEditClick() {
    setIsOnEdit(true);
  }

  return (
    <>
      <Header isLogin={isLogin} />
      <main className="main">
        <section className="profile">
          <h1 className="profile__title">Привет, {name}!</h1>
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
                value={name}
                onChange={e => setName(e.target.value)}
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
                value={email}
                onChange={e => setEmail(e.target.value)}
                disabled={!isOnEdit}
              />
            </label>
            <span className="form-profile__error form-profile__error_type_email">
              {' '}
            </span>
            {isOnEdit && (
              <>
                {isValid ? (
                  <></>
                ) : (
                  <span className="form-profile__error-serv">
                    Ошибка сервера
                  </span>
                )}
                <button type="submit" className="form-profile__submit">
                  Сохранить
                </button>
              </>
            )}
          </form>
          {!isOnEdit && (
            <>
              <button
                type="button"
                onClick={handleEditClick}
                className="profile__edit"
              >
                Редактировать
              </button>
              <button
                type="button"
                onClick={signOut}
                className="profile__signout"
              >
                Выйти из аккаунта
              </button>
            </>
          )}
        </section>
      </main>
    </>
  );
}

export default Profile;
