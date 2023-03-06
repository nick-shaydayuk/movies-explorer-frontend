import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoute({ isLogin }) {
  console.log(isLogin);
  return isLogin ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
