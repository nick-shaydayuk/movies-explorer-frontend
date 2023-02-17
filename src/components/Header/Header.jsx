import './Header.scss';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import AccountLink from '../AccountLink/AccountLink';
import { useState } from 'react';

function Header({ isLogin }) {
  const actualPath = useLocation().pathname;

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header
      className={`header ${actualPath === '/' ? 'header-type-landing' : ''}`}
    >
      <Logo />
      <div className="header__container">
        {true ? (
          <div className="header__link-container">
            <Navigation />
            <AccountLink />
          </div>
        ) : (
          <AuthNavigation />
        )}
      </div>
      <button className="header__burger" onClick={() => setIsMenuOpen(true)}></button>
      {isMenuOpen ? <MobileMenu /> : <></>}
    </header>
  );
}

export default Header;
