import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import UserPage from './routes/user';

function RouterConfig({ history, app }) {
  const routes = [
    {
      'path': '/',
      'component': () => import('./routes/index')
    },
    {
      'path': '/user',
      'models': () => [
        import('./models/user')
      ],
      'component': () => import('./routes/user')
    }
  ];

  return (
    <Router history={history}>
      <Switch>
        {
          routes.map(({ path, ...dynamics }, key) => (
            <Route
              key={key}
              exact
              path={path}
              component={dynamic({
                app,
                ...dynamics,
              })}
            />
          ))
        }
      </Switch>
    </Router>
  );
}

export default RouterConfig;
