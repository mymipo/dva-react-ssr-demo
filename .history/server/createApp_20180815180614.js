import React from 'react';
import dva from 'dva';
import { StaticRouter, Route } from 'dva/router';
import IndexPage from '../src/routes/index';
import UserPage from '../src/routes/user';

const routes = (
  <div>
    <Route path="/" exact component={IndexPage} />
    <Route path="/user" exact component={UserPage} />
  </div>
);
export default function createApp(opts, other) {

  const app = dva({
    ...opts
  });

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
