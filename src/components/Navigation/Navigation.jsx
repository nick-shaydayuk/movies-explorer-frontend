import './Navigation.scss';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul className="links">
        <li className="links__item">
          <NavLink
            to="/movies"
            className="links__link"
          >
            Фильмы
          </NavLink>
        </li>
        <li className="links__item">
          <NavLink
            to="/saved-movies"
            className="links__link"
          >
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;