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
import {
  getMyData,
  loadMyMovies,
  login,
  signup,
  removeMovie,
  addMovie,
  logout,
} from '../../utils/authApi';
import { loadMovies } from '../../utils/mainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);
  const [isRegisterValid, setIsRegisterValid] = useState(true);
  const [isLoginValid, setIsLoginValid] = useState(true);
  const [movies, setMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [myMovies, setMyMovies] = useState([]);

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

  const deleteMovie = (movieId) => {
    removeMovie(movieId).then(() => {
      loadMyMovies().then((res) => {
        setMyMovies(res);
        localStorage.setItem('myMovies', JSON.stringify(res));
      });
    });
  };

  const likeMovie = (movie, user) => {
    addMovie(movie, user).then(() => {
      loadMyMovies().then((res) => {
        setMyMovies(res);
        localStorage.setItem('myMovies', JSON.stringify(res));
      });
    });
  };

  const signOut = () => {
    logout().then(() => {
      setIsLogin(false);
      localStorage.clear();
      navigate('/');
    });
  };

  useEffect(() => {
    if (!isLogin) return;
    loadMovies().then((res) => {
      setMovies(res);
      localStorage.setItem('movies', JSON.stringify(res))
    });
    getMyData().then((res) => {
      setCurrentUser(res.data);
    });
    loadMyMovies().then((res) => {
      setMyMovies(res);
      localStorage.setItem('myMovies', JSON.stringify(res));
    });
  }, [isLogin]);

  useEffect(() => {
    if (!localStorage.getItem('isLogin')) return;
    setIsLogin(true);
    loadMovies().then((res) => {
      setMovies(res);
      localStorage.setItem('movies', JSON.stringify(res))
    });
    loadMyMovies().then((res) => {
      setMyMovies(res);
      localStorage.setItem('myMovies', JSON.stringify(res));
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
            element={
              <ProtectedRoute user={currentUser}>
                <Profile isLogin={isLogin} signOut={signOut} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute user={currentUser}>
                <MoviesView
                  isLogin={isLogin}
                  movies={JSON.parse(localStorage.getItem('movies'))}
                  likeMovie={likeMovie}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute user={currentUser}>
                <SavedMovies
                  isLogin={isLogin}
                  movies={JSON.parse(localStorage.getItem('myMovies'))}
                  deleteMovie={deleteMovie}
                />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
