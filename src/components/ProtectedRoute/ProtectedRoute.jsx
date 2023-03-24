import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
  return (
    <React.Fragment>
      {(user.name !== "" && user.email !== "") ? ( children ) :
      (<Navigate to="/sign-in" replace />)}
    </React.Fragment>
  );
};

export default ProtectedRoute;