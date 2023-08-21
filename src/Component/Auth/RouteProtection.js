/** @format */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
function RouteProtection({ role, redirectTo }) {
  const roleGroup = localStorage.getItem('role');
  const token = useSelector((state) => state.auth.adminToken);
  const isVerified = roleGroup === role && token;
  if (isVerified) {
    return <Outlet />;
  } else {
    return <Navigate to={redirectTo} replace />;
  }
}

export default RouteProtection;
