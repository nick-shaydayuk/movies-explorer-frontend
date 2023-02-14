import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.scss';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFoundView from '../NotFoundView/NotFoundView';
import Profile from '../Profile/Profile';
import MoviesView from '../Movies/MoviesView';
import { useState } from 'react';

//const history = useNavigate();

function App() {
  const path = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin(true);
    path('/movies');
  };

  const handleRegister = () => {
    path('/signin');
  };

  const signOut = () => {
    setIsLogin(false);
    path('/');
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header isLogin={isLogin} />
              <Main />
              <Footer />
            </>
          }
        />
        <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
        <Route
          path="/signup"
          element={<Register handleRegister={handleRegister} />}
        />
        <Route
          path="/profile"
          element={<Profile isLogin={isLogin} signOut={signOut} />}
        />
        <Route path="/movies" element={<MoviesView isLogin={isLogin} />} />
        {/* <Route
          path="/saved-movies"
          element={<SavedMoviesView isLogin={isLogin} />}
        /> */}
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </div>
  );
}

export default App;
