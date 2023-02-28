import './Logo.scss';
import { NavLink } from 'react-router-dom';
import logoPath from '../../images/logo.svg';

function Logo() {
  return (
    <div className="logo">
      <NavLink to="/" className="logo-link">
        <img src={logoPath} alt="логотип проекта" className="logo__img" />
      </NavLink>
    </div>
  );
}

export default Logo;
