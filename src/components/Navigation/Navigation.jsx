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
            activeClassName="links__link links__link_active"
          >
            Фильмы
          </NavLink>
        </li>
        <li className="links__item">
          <NavLink
            to="/saved-movies"
            className="links__link"
            activeClassName="links__link links__link_active"
          >
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;