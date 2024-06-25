import React, { useContext } from 'react';
import { Route, Redirect, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({  Component, roles}) => {
  const { UserToken ,Role} = useContext(AuthContext);

  return (
    <Route render={(props) => {
  

      if (roles && !roles.includes(Role)) {
        return <Navigate to='/' />;
      }

      return <Component />;
    }} />
  );
};

export default ProtectedRoute;