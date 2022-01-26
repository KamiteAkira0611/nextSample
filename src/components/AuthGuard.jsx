import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const AuthGuard = ({children}) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if(!isLoading && isAuthenticated){
    console.log(user);
  }

  return <>{children}</>;
};

export default AuthGuard;
