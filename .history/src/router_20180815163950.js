import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import UserPage from './routes/user';

function RouterConfig({ history }) {
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
        <Route path="/" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
