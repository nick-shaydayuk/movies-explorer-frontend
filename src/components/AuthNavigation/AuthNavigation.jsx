import { NavLink } from 'react-router-dom';
import './AuthNavigation.scss';

function AuthNavigation() {
  return (
    <nav>
      <ul className="auth-navigation">
        <li className="auth-navigation__item">
          <NavLink to="/signup" className="auth-navigation__link">Регистрация</NavLink>
        </li>
        <li className="auth-navigation__item">
          <NavLink to="/signin" className="auth-navigation__link auth-navigation__link_registration">Войти</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AuthNavigation;