import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedUserRoute = (props) => {
  return props.user ? <Navigate to="/" /> : props.children;
};

export default ProtectedUserRoute;
