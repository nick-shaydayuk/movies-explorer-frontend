import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoute({ isLogin }) {
  return isLogin ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
