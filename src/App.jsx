import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
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
      <Router history={history}>
        <CssBaseline />
        {renderRoutes(routes)}
      </Router>
    </ThemeProvider>
  );
}

export default App;
