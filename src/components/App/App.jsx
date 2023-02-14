import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Register from '../Register/Register';
//import Profile from '../Profile/Profile';

// const history = useNavigate();

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <Header />
              <Main />
              <Footer />
            </>
          )}
        />
        {/* <Route
          path="/profile"
          element={<Profile />}
        /> */}
        <Route
          path="/signin"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<Register />}
        />
      </Routes>
    </div>
  );
}

export default App;