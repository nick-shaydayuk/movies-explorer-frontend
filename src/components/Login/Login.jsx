import './Login.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { useRef } from 'react';

function Login({ handleLogin, isValid }) {

  const emailRef = useRef();
  const passwordRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    handleLogin(
      emailRef.current.value,
      passwordRef.current.value
    )
  }
  return (
    <main>
      <section className="login-page">
        <Logo />
        <h1 className="login-page__title">Рады видеть!</h1>
        <form className="form-login" onSubmit={onSubmit}>
          <div className="form-login__container">
            <label className="form-login__label" htmlFor="Email">
              Email
              <input
                id="Email"
                name="Email"
                className={`form-login__input ${
                  isValid ? '' : 'form-login__input_invalid'
                }`}
                type="Email"
                ref={emailRef}
                required
              />
              {isValid ? (
                <></>
              ) : (
                <span className="form-register__error">
                  Что-то пошло не так...
                </span>
              )}
            </label>
            <label className="form-login__label" htmlFor="password">
              Пароль
              <input
                id="password"
                name="password"
                className={`form-login__input ${
                  isValid ? '' : 'form-login__input_invalid'
                }`}
                type="password"
                minLength="2"
                maxLength="20"
                ref={passwordRef}
                required
              />
              {isValid ? (
                <></>
              ) : (
                <span className="form-register__error">
                  Что-то пошло не так...
                </span>
              )}
            </label>
          </div>
          <div>
            <button type="submit" className="form-login__submit">
              Войти
            </button>
            <div>
              <p className="login-page__text">
                Ещё не зарегистрированы?
                <NavLink to="/signup" className="login-page__link">
                  Регистрация
                </NavLink>
              </p>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;
