// ProtectedRoute.jsx
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('userToken');
  const isAuthenticated = !!token;

  return (
    <Route {...rest} render={
      props => isAuthenticated ? (<Component {...props} />) : (<Redirect to="/Login" />)
    } />
  );
};

export default ProtectedRoute;
