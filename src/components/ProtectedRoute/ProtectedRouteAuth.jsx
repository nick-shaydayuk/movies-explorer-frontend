import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRouteAuth({ isLogin }) {
  return isLogin ? <Navigate to="/" /> : <Outlet />;
}

export default ProtectedRouteAuth;
