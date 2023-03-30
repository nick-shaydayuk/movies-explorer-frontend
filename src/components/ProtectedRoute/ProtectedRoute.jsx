import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
  return props.user ? props.children : <Navigate to="/" />;
};

export default ProtectedRoute;
