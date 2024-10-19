import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, login }) => {
  return login ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
