import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import GoogleAnalytics from './components/GoogleAnalytics';
import { createAppTheme } from './lib/mui/theme';
import routes, { renderRoutes } from './router';

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
          <CssBaseline />
          <GoogleAnalytics />
          {renderRoutes(routes)}
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
