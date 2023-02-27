import './Register.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

function Register() {
  function onSubmit(e) {
    e.preventDefault();
  }
  return (
    <main>
      <section className="register">
        <Logo />
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="form-register" onSubmit={onSubmit}>
          <div className="form-register__container">
            <label className="form-register__label" htmlFor="name">
              Имя
              <input
                name="name"
                id="name"
                className="form-register__input"
                type="text"
                minLength="2"
                maxLength="30"
                required
              />
              <span className="form-register__error">
                Не знаем такого! Познакомимся?
              </span>
            </label>
            <label className="form-register__label" htmlFor="Email">
              Email
              <input
                id="Email"
                name="Email"
                className="form-register__input"
                type="Email"
                required
              />
              <span className="form-register__error">
                Неправильный пароль или e-mail!
              </span>
            </label>
            <label className="form-register__label" htmlFor="password">
              Пароль
              <input
                id="password"
                name="password"
                className="form-register__input"
                type="password"
                minLength="2"
                maxLength="20"
                required
              />
              <span className="form-register__error">
                Неправильный пароль или e-mail!
              </span>
            </label>
          </div>
          <div>
            <button type="submit" className="form-register__submit">
              Зарегистрироваться
            </button>
            <div>
              <p className="register__text">
                Уже зарегистрировались?
                <NavLink to="/signin" className="register__link">
                  Войти
                </NavLink>
              </p>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Register;
