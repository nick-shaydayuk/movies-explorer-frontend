import './Login.scss';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import useForm from '../../utils/useForm';
import {
  MESSAGE_VALIDATION_EMAIL,
  MESSAGE_VALIDATION_PASSWORD,
} from '../../utils/consts';

function Login({ handleLogin, isInfoMessage }) {
  const { values, errors, handleChange, isValid } = useForm();

  const currentPath = useLocation().pathname;

  function onSubmit(e) {
    e.preventDefault();
    handleLogin(values.Email, values.password, currentPath);
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
                className="form-login__input"
                type="Email"
                onChange={handleChange}
                autoComplete="off"
                pattern="^(.+)@(.+)\.(.+)$"
                value={values.Email || ''}
                required
              />
              <span className="form-login__error">
                {errors.EmailLogin ? MESSAGE_VALIDATION_EMAIL : ''}
              </span>
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
                onChange={handleChange}
                value={values.password || ''}
                required
              />
              <span className="form-login__error">
                {errors.password ? MESSAGE_VALIDATION_PASSWORD : ''}
              </span>
            </label>
          </div>
          <div>
          <span className="form-login__error-serv">{isInfoMessage ? isInfoMessage.message : ''}</span>
            <button type="submit" className="form-login__submit" disabled={!isValid}>
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
