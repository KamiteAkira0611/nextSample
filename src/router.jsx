import React, { Fragment, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={null}>
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
    layout: MainLayout,
    routes: [
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
