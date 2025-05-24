import {Navigate, Outlet} from 'react-router-dom';
import {isLoggedIn} from '../hooks/useRegister';

export const AuthLayout = () => {

  if (isLoggedIn()) {
    return <Navigate to={`/home/${isLoggedIn()}`} replace />;
  }

  return <Outlet />;
};
