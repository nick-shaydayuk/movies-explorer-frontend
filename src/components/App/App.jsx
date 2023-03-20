import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.scss';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFoundView from '../NotFoundView/NotFoundView';
import Profile from '../Profile/Profile';
import MoviesView from '../Movies/MoviesView';
import SavedMovies from '../SavedMovies/SavedMovies';
import { getMyData, login, signup } from '../../utils/authApi';
import { loadMovies } from '../../utils/mainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [isRegisterValid, setIsRegisterValid] = useState(true);
  const [isLoginValid, setIsLoginValid] = useState(true);
  const [movies, setMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const handleLogin = (email, password) => {
    login(email, password)
      .then(() => {
        setIsLogin(true);
        localStorage.setItem('isLogin', true);
        setIsLoginValid(true);
        navigate('/movies');
      })
      .catch((err) => {
        console.log(err);
        setIsLoginValid(false);
      });
  };

  const handleRegister = (name, email, password) => {
    signup(name, email, password)
      .then((res) => {
        if (!res.ok) return;
        handleLogin(res.email, password);
        setIsRegisterValid(true);
      })
      .catch((err) => {
        console.log(err);
        setIsRegisterValid(false);
      });
  };

  const signOut = () => {
    setIsLogin(false);
    navigate('/');
  };

  useEffect(() => {
    if (!isLogin) return;
    loadMovies().then((res) => {
      setMovies(res);
    });
    getMyData().then((res) => {
      setCurrentUser(res.data);
    });
  }, [isLogin]);

  useEffect(() => {
    if (!localStorage.getItem('isLogin')) return;
    setIsLogin(true);
    loadMovies().then((res) => {
      setMovies(res);
    });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
          <Route
            path="/signin"
            element={<Login handleLogin={handleLogin} isValid={isLoginValid} />}
          />
          <Route
            path="/signup"
            element={
              <Register
                handleRegister={handleRegister}
                isValid={isRegisterValid}
              />
            }
          />
          <Route
            path="/profile"
            element={<Profile isLogin={isLogin} signOut={signOut} />}
          />
          <Route
            path="/movies"
            element={<MoviesView isLogin={isLogin} movies={movies} />}
          />
          <Route
            path="/saved-movies"
            element={<SavedMovies isLogin={isLogin} />}
          />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
