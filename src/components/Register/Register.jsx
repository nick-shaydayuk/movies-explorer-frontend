import './Register.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { useRef, useState } from 'react';

function Register({ handleRegister, isValid }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isEmailValid, setIsEmailValid] = useState(true);

  function isValidEmail(email) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]{2,61}(?:[a-zA-Z0-9-.][a-zA-Z0-9]{2,61})*$/.test(
      email
    );
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!isValidEmail(emailRef.current.value)) {
      setIsEmailValid(false);
      return;
    }
    handleRegister(
      nameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value
    );
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
                ref={nameRef}
                required
              />
            </label>
            <label className="form-register__label" htmlFor="Email">
              Email
              <input
                id="Email"
                name="Email"
                className={`form-register__input ${
                  !isValid || !isEmailValid
                    ? 'form-register__input_invalid'
                    : ''
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
              {isEmailValid ? (
                <></>
              ) : (
                <span className="form-register__error">
                  Введите корретный email
                </span>
              )}
            </label>
            <label className="form-register__label" htmlFor="password">
              Пароль
              <input
                id="password"
                name="password"
                className={`form-register__input ${
                  isValid ? '' : 'form-register__input_invalid'
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
