import './MobileMenu.scss';
import { NavLink } from 'react-router-dom';
import AccountLink from '../AccountLink/AccountLink'

function MobileMenu({ closeMenu }) {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__close-btn-container">
        <button className="mobile-menu__close-btn" onClick={closeMenu}></button>
      </div>
      <div className="mobile-menu__links-container">
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/movies">Фильмы</NavLink>
        <NavLink to="/saved-movies">Сохранённые фильмы</NavLink>
      </div>
      <div className="mobile-menu__accont-container">
        <AccountLink />
      </div>
    </div>
  );
}

export default MobileMenu;
