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
import ProtectedUserRoute from '../ProtectedUserRoute/ProtectedUserRoute';

function App() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);
  const [isRegisterValid, setIsRegisterValid] = useState(true);
  const [isLoginValid, setIsLoginValid] = useState(true);
  const [movies, setMovies] = useState(
    localStorage.getItem('searchedMovies')
      ? JSON.parse(localStorage.getItem('searchedMovies'))
      : []
  );
  const [currentUser, setCurrentUser] = useState({});
  const [myMovies, setMyMovies] = useState(
    localStorage.getItem('myMovies')
      ? JSON.parse(localStorage.getItem('myMovies'))
      : []
  );
  const [isPreloaderOpen, setIsPreloaderOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (email, password) => {
    login(email, password)
      .then(() => {
        setIsLogin(true);
        localStorage.setItem('isLogin', true);
        setIsLoginValid(true);
        loadMovies().then((res) => {
          setMovies(res);
          localStorage.setItem('movies', JSON.stringify(res));
          navigate('/movies');
        });
      })
      .catch((err) => {
        console.log(err);
        setIsLoginValid(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleRegister = (name, email, password) => {
    signup(name, email, password)
      .then((res) => {
        handleLogin(res.email, password);
        setIsRegisterValid(true);
      })
      .catch((err) => {
        console.log(err);
        setIsRegisterValid(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const deleteMovie = (movie) => {
    removeMovie(movie._id).then(() => {
      const newMyMovies = myMovies.filter(
        (m) => m.movieId !== movie.id && m.movieId !== movie.movieId
      );
      setMyMovies(newMyMovies);
      localStorage.setItem('myMovies', JSON.stringify(newMyMovies));
    });
  };

  const likeMovie = (movie, user) => {
    addMovie(movie, user).then((res) => {
      const oldArr = JSON.parse(localStorage.getItem('myMovies'));
      const newArr = [res, ...oldArr];
      setMyMovies(newArr);
      localStorage.setItem('myMovies', JSON.stringify(newArr));
    });
  };

  const signOut = () => {
    logout().then(() => {
      setIsLogin(false);
      localStorage.setItem('myMovies', JSON.stringify([]));
      localStorage.clear();
      setMovies([]);
      setMyMovies([]);
      navigate('/');
    });
    setCurrentUser(null);
  };

  useEffect(() => {
    if (!isLogin) return;
    setIsPreloaderOpen(true);
    loadMovies().then((res) => {
      setMovies(res);
      localStorage.setItem('movies', JSON.stringify(res));
      setIsPreloaderOpen(false);
    });
    getMyData().then((res) => {
      setCurrentUser(res.data);
    });
    loadMyMovies().then((res) => {
      setMyMovies(res);
      localStorage.setItem('myMovies', JSON.stringify(res));
      setIsPreloaderOpen(false);
    });
  }, [isLogin]);

  useEffect(() => {
    if (!localStorage.getItem('isLogin')) return;
    setIsLogin(true);
    loadMovies().then((res) => {
      setMovies(res);
      localStorage.setItem('movies', JSON.stringify(res));
    });
    loadMyMovies().then((res) => {
      setMyMovies(res);
      localStorage.setItem('myMovies', JSON.stringify(res));
    });
    navigate();
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
            element={
              <ProtectedUserRoute user={currentUser} isLogin={isLogin}>
                <Login
                  handleLogin={handleLogin}
                  isValid={isLoginValid}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              </ProtectedUserRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedUserRoute user={currentUser} isLogin={isLogin}>
                <Register
                  handleRegister={handleRegister}
                  isValid={isRegisterValid}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              </ProtectedUserRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={currentUser} isLogin={isLogin}>
                <Profile
                  isLogin={isLogin}
                  signOut={signOut}
                  setCurrentUser={setCurrentUser}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute user={currentUser} isLogin={isLogin}>
                <MoviesView
                  isLogin={isLogin}
                  movies={movies}
                  myMovies={myMovies}
                  likeMovie={likeMovie}
                  deleteMovie={deleteMovie}
                  isPreloaderOpen={isPreloaderOpen}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute user={currentUser} isLogin={isLogin}>
                <SavedMovies
                  isLogin={isLogin}
                  movies={myMovies}
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
