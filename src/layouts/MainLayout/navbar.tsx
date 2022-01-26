import { useAuth0 } from '@auth0/auth0-react';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  const { loginWithRedirect } = useAuth0()
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SAMANSA
          </Typography>
          <Button color="inherit" onClick={() => loginWithRedirect()}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
