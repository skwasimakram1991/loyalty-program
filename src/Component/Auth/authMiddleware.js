/** @format */

import { userLogout } from '../../store';

const authMiddleware = (store) => (next) => (action) => {
  const adminToken = localStorage.getItem('adminToken');
  const role = localStorage.getItem('role');

  if (!adminToken && !role && action.type !== 'auth/logout') {
    store.dispatch(userLogout());
  }

  return next(action);
};

export { authMiddleware };
