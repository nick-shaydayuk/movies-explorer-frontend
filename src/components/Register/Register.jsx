import './Register.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import useForm from '../../utils/useForm';
import {
  MESSAGE_VALIDATION_EMAIL,
  MESSAGE_VALIDATION_NAME,
  MESSAGE_VALIDATION_PASSWORD,
} from '../../utils/consts';

function Register({ handleRegister, isInfoMessage }) {
  const { values, errors, handleChange, isValid } = useForm();
  function onSubmit(e) {
    e.preventDefault();
    handleRegister(values.name, values.Email, values.password);
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
                onChange={handleChange}
                value={values.name || ''}
                pattern="^[A-Za-zа-яА-ЯёЁ0-9-\s]+$"
                required
              />
              <span className="form-register__error">
                {errors.name ? MESSAGE_VALIDATION_NAME : ''}
              </span>
            </label>
            <label className="form-register__label" htmlFor="Email">
              Email
              <input
                id="Email"
                name="Email"
                className="form-register__input"
                type="Email"
                onChange={handleChange}
                pattern="^(.+)@(.+)\.(.+)$"
                value={values.Email || ''}
                required
              />
              <span className="form-register__error">
                {errors.Email ? MESSAGE_VALIDATION_EMAIL : ''}
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
                onChange={handleChange}
                value={values.password || ''}
                required
              />
              <span className="form-register__error">
                {errors.password ? MESSAGE_VALIDATION_PASSWORD : ''}
              </span>
            </label>
          </div>
          <div>
            <span className="form-register__error-serv">
              {isInfoMessage ? isInfoMessage.message : ''}
            </span>
            <button
              type="submit"
              className="form-register__submit"
              disabled={!isValid}
            >
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
