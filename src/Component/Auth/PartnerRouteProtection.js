/** @format */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
function RouteProtection({ role }) {
  // const token = data.data.token;

  const roleGroup = localStorage.getItem('role');
  const token = localStorage.getItem('adminToken');

  const isVerified = roleGroup === role && token;
  if (isVerified) {
    return <Outlet />;
  } else {
    return <Navigate to='/partner/login' replace />;
  }
  // return <>{isVerified ? <Outlet /> : <Navigate to='/login' replace />}</>;
}

export default RouteProtection;
