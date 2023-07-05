/** @format */

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
function RouteProtection({ role }) {
  const accesedRole = 'admin';
  const token = 'token';
  const isVerified = role === accesedRole;

  return <>{isVerified ? <Outlet /> : <Navigate to='/login' />}</>;
}

export default RouteProtection;
