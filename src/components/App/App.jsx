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
import SavedMovies from '../SavedMovies/SavedMovies';
import { signin, signup } from '../../utils/authApi';

function App() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = (email, password) => {
    signin(email, password).then(() => {
      setIsLogin(true);
      navigate('/movies');
    });
  };

  const handleRegister = (name, email, password) => {
    signup(name, email, password).then(() => {
      handleLogin(email, password);
    });
  };

  const signOut = () => {
    setIsLogin(false);
    navigate('/');
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
        <Route
          path="/saved-movies"
          element={<SavedMovies isLogin={isLogin} />}
        />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </div>
  );
}

export default App;
