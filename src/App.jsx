import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import GoogleAnalytics from './components/GoogleAnalytics';
import { createAppTheme } from './lib/mui/theme';
import routes, { renderRoutes } from './router';
import AuthProvider from './lib/auth/provider';

const history = createBrowserHistory()

const config = {
  theme: "DARK"
}
const theme = createAppTheme(config)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        dense
        maxSnack={3}
      >
        <Router history={history}>
          <AuthProvider>
            <CssBaseline />
            <GoogleAnalytics />
            {renderRoutes(routes)}
          </AuthProvider>
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
