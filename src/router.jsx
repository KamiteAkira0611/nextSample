import { Fragment, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthGuard from './components/AuthGuard';
import LoadingScreen from './components/LoadingScreen';
import MainLayout from './layouts/MainLayout';

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
    path: '*',
    guard: AuthGuard,
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: '/demo',
        component: lazy(() => import("./views/demo"))
      },
      {
        exact: true,
        path: '/',
        component: lazy(() => import("./views/homeView"))
      },
    ]
  },
  // {
  //   path: '*',
  //   // layout: MainLayout,
  //   routes: [
  //     {
  //       exact: true,
  //       path: '/',
  //       component: import("./views/homeView")
  //     },
  //   ]
  // }
]

export default routes;
