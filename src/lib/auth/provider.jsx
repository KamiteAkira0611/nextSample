import { Auth0Provider } from '@auth0/auth0-react';

const AuthProvider = ({children}) => {
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || ""
  const domain = process.env.REACT_APP_AUTH0_DOMAIN || ""
  
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
