import React from 'react';
import dva from 'dva';
import { StaticRouter } from 'dva/router';
import IndexPage from '../src/routes/index';
import GoodDetails from '../src/routes/user';

const routes = (
  <div>
    <Route path="/" exact component={IndexPage} />
    <Route path="/goods/details/:id" exact component={GoodDetails} />
  </div>
);
export default function createApp(opts, other) {

  const app = dva({
    ...opts
  });


  if (other.url === '/user') {
    app.model({
      namespace: 'user',
      state: {
        ...other.data
      }
    });
  }

  app.router(() => (
    <StaticRouter
      location={other.url}
      context={{}}
    >
      {routes}
    </StaticRouter>
  ));

  return app;
}
