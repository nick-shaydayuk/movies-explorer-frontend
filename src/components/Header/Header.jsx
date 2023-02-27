import './Header.scss';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import AccountLink from '../AccountLink/AccountLink';
import { useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import { Route, Routes } from 'react-router-dom';

function Header({ isLogin }) {
  const actualPath = useLocation().pathname;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`header ${actualPath === '/' ? 'header-type-landing' : ''}`}
    >
      <Logo />
      <div className="header__container">
        {false ? (
          <div className="header__link-container">
            <Navigation />
            <AccountLink />
          </div>
        ) : (
          <AuthNavigation />
        )}
      </div>
      <Routes>
        <Route
          path="/profile"
          element={
            <button
              className="header__burger"
              onClick={() => setIsMenuOpen(true)}
            ></button>
          }
        />
      </Routes>
      {isMenuOpen ? <MobileMenu /> : <></>}
    </header>
  );
}

export default Header;
