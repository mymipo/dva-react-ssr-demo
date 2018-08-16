import React from 'react';
import dva from 'dva';
import { StaticRouter } from 'dva/router';
// import IndexPage from '../src/routes/home';
// import GoodDetails from '../src/routes/goods/details';

// const routes = (
//   <div>
//     <Route path="/" exact component={IndexPage} />
//     <Route path="/goods/details/:id" exact component={GoodDetails} />
//   </div>
// );
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
      <LanguageProvider
        messages={translationMessages}
        store={app._store}
      >
        {routes}
      </LanguageProvider>
    </StaticRouter>
  ));

  return app;
}
