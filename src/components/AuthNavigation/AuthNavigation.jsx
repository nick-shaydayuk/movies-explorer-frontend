import { NavLink, useLocation } from 'react-router-dom';
import './AuthNavigation.scss';

function AuthNavigation() {
  const location = useLocation();
  return (
    <nav>
      <ul className="auth-navigation">
        <li className="auth-navigation__item">
          <NavLink
            to="/signup"
            className={`auth-navigation__link auth-navigation__link_registration ${
              location.pathname === '/'
                ? 'auth-navigation__link_registration_main-page'
                : ''
            }`}
          >
            Регистрация
          </NavLink>
        </li>
        <li className="auth-navigation__item">
          <NavLink
            to="/signin"
            className="auth-navigation__link  auth-navigation__link_signin"
          >
            Войти
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AuthNavigation;
