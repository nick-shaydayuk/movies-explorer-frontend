import './Login.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

function Login() {
  function onSubmit(e) {
    e.preventDefault();
  }
  return (
    <main>
      <section className="login-page">
        <Logo />
        <h1 className="login-page__title">Рады видеть!</h1>
        <form className="form-login" onSubmit={onSubmit}>
          <label className="form-login__label" htmlFor="Email">
            Email
            <input
              id="Email"
              name="Email"
              className="form-login__input"
              type="Email"
              required
            />
            <span className="form-login__error">Неправильный пароль или e-mail!</span>
          </label>
          <label className="form-login__label" htmlFor="password">
            Пароль
            <input
              id="password"
              name="password"
              className="form-login__input"
              type="password"
              minLength="2"
              maxLength="20"
              required
            />
            <span className="form-login__error">Неправильный пароль или e-mail!</span>
          </label>
          <button type="submit" className="form-login__submit">Войти</button>
        </form>
        <p className="login-page__text">
          Ещё не зарегистрированы?
          <NavLink
            to="/signup"
            className="login-page__link"
          >
            Регистрация
          </NavLink>
        </p>
      </section>
    </main>
  );
}

export default Login;