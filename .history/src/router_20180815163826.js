import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/index';
import UserPage from './routes/user';

function RouterConfig({ history }) {
  const routes = [
    {
      'path': '/',
      'models': () => [
        import('./models/home/index'),
        import('./models/user/favorites'),
        import('./models/search/game')
      ],
      'component': () => import('./routes/home')
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
