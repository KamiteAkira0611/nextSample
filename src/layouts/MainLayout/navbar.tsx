import { useAuth0 } from '@auth0/auth0-react';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { logout } = useAuth0()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              SAMANSA
            </Typography>
          </Link>
          <Button color="inherit" onClick={() => logout({returnTo: window.location.origin})}>logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
