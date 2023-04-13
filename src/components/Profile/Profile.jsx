import './Profile.scss';
import { useState, useContext, useEffect } from 'react';
import Header from '../Header/Header';
import CurrentuserContext from '../../contexts/CurrentUserContext';
import { changeMyData } from '../../utils/authApi';

function Profile({ signOut, isLogin, setCurrentUser }) {
  const [isOnEdit, setIsOnEdit] = useState(false);
  const [title, setTitle] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const user = useContext(CurrentuserContext);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setTitle(user.name);
  }, [user]);

  function handleSubmit(e) {
    e.preventDefault();
    if (name === user.name && email === user.email) return;
    changeMyData(email, name).then((res) => {
      setName(res.data.name);
      setEmail(res.data.email);
      setTitle(res.data.name);
      setIsOnEdit(!isOnEdit);
      setIsPopupOpen(true)
      setCurrentUser(res.data)
      setTimeout(() => {
        setIsPopupOpen(false)
      }, 1000)
    });
  }

  function handleEditClick() {
    setIsOnEdit(true);
  }

  return (
    <>
      <Header isLogin={isLogin} />
      <main className="main">
        <section className="profile">
          <h1 className="profile__title">Привет, {title}!</h1>
          <form className="form-profile" onSubmit={handleSubmit}>
            <div htmlFor="name" className="form-profile__user-container">
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
                onChange={(e) => setName(e.target.value)}
                disabled={!isOnEdit}
              />
            </div>

            <div htmlFor="Email" className="form-profile__user-container">
              <p className="form-profile__input-name">E-mail</p>
              <input
                id="Email"
                name="Email"
                className="form-profile__input"
                type="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={!isOnEdit}
              />
            </div>
            <span className="form-profile__error form-profile__error_type_email">
              {' '}
            </span>
          </form>
          {isOnEdit ? (
            <>
              <button
                type="button"
                onClick={handleSubmit}
                className="profile__edit"
                disabled={name === user.name && email === user.email}
              >
                Сохранить
              </button>
              <button
                type="button"
                onClick={signOut}
                className="profile__signout"
              >
                Выйти из аккаунта
              </button>
            </>
          ) : (
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
      {isPopupOpen ? (<div className="popup">
        <div className="popup__container">
          <h3>Данные обновлены</h3>
        </div>
      </div>) : <></>}
    </>
  );
}

export default Profile;
