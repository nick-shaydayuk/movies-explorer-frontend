import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedUserRoute = (props) => {
  return (props.user && props.isLogin) ? <Navigate to="/saved-movies" /> : props.children;
};

export default ProtectedUserRoute;
