import './Header.scss';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import AccountLink from '../AccountLink/AccountLink';

function Header({ isLogin }) {
  const actualPath = useLocation().pathname;
  return (
    <header
      className={`header ${actualPath === '/' ? 'header-type-landing' : ''}`}
    >
      <Logo />
      {true
        ? (
          <div className="header__link-container">
            <Navigation />
            <AccountLink />
          </div>
        )
        : <AuthNavigation />}
    </header>
  );
}

export default Header;