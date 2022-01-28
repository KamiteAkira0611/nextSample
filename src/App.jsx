import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import GoogleAnalytics from './components/GoogleAnalytics';
import { createAppTheme } from './packages/mui/theme';
import routes, { renderRoutes } from './router';
import AuthProvider from './packages/auth/provider';
import GlobalStyles from './components/GrobalStyles';

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
        <BrowserRouter>
          <AuthProvider>
            <GlobalStyles/>
            <CssBaseline />
            <GoogleAnalytics />
            {renderRoutes(routes)}
          </AuthProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
