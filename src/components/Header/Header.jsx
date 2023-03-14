import './Header.scss';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import AccountLink from '../AccountLink/AccountLink';
import { useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';

function Header({ isLogin }) {
  const actualPath = useLocation().pathname;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`header ${actualPath === '/' ? 'header-type-landing' : ''}`}
    >
      <div className="header__content">
        <Logo />
        <div className="header__container">
          {isLogin ? (
            <div className="header__link-container">
              <Navigation />
              <AccountLink />
              <button
                className="header__burger"
                onClick={() => setIsMenuOpen(true)}
              ></button>
            </div>
          ) : (
            <AuthNavigation />
          )}
        </div>

        {isMenuOpen ? <MobileMenu closeMenu={closeMenu} /> : <></>}
      </div>
    </header>
  );
}

export default Header;
