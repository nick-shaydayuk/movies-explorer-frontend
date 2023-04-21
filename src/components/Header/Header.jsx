import './Header.scss';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import AccountLink from '../AccountLink/AccountLink';
import { useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';

function Header({ isLogin }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
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
        {isMenuOpen ? <MobileMenu closeMenu={() => setIsMenuOpen(false)} /> : <></>}
      </div>
    </header>
  );
}

export default Header;
