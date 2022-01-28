import { Fragment, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
              exact={route.exact}
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
    exact: true,
    path: '/404',
    component: lazy(() => import('src/views/homeView'))
  },
  {
    exact: true,
    path: '/auth/new',
    layout: AuthLayout,
    component: lazy(() => import("src/views/auth/profileNewView"))
  },
  {
    path: '*',
    guard: AuthGuard,
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: '/',
        component: lazy(() => import("src/views/homeView"))
      },
      {
        exact: true,
        path: '/demo',
        component: lazy(() => import("src/views/demo"))
      },
      {
        component: () => <Redirect to="/404" />
      }
    ]
  },
]

export default routes;
