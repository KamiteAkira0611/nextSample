import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import routes, { renderRoutes } from './router';
const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      {renderRoutes(routes)}
    </Router>
  );
}

export default App;
