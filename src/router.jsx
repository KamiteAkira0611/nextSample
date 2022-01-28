import { Fragment, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthGuard from './components/AuthGuard';
import LoadingScreen from './components/LoadingScreen';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen/>}>
    <Switch>
      {
        routes.map((route, i) => {
          const Guard = route.guard || Fragment;
          const Layout = route.layout || Fragment;
          const Component = route.component;

          return (
            <Route
              key={i}
              path={route.path}
              render={(props) => (
                <Guard>
                  <Layout>
                    {route.routes
                      ? renderRoutes(route.routes)
                      : <Component {...props} />}
                  </Layout>
                </Guard>
              )}
            />
          );
        })
      }
    </Switch>
  </Suspense>
);

const routes = [
  {
    path: '/auth',
    layout: AuthLayout,
    routes: [
      {
        path: '/new',
        component: lazy(() => import("./views/profile/ProfileNewView"))
      }
    ]
  },
  {
    path: '*',
    guard: AuthGuard,
    layout: MainLayout,
    routes: [
      {
        path: '/demo',
        component: lazy(() => import("./views/demo"))
      },
      {
        path: '/',
        component: lazy(() => import("./views/homeView"))
      },
    ]
  },
]

export default routes;
