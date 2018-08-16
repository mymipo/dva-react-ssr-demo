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

  app.model({
    namespace: 'lang',
    state: {
      'locale': userNavLanguage()
    }
  });

  app.model({
    namespace: 'im',
    state: {
      'unreadMsgCount': 0
    }
  });


  if (other.url === '/') {
    app.model({
      namespace: 'home',
      state: {
        ...other.data
      }
    });
  } else if (pathToRegexp('/goods/details/:id').exec(other.url)) {
    app.model({
      namespace: 'goods_details',
      state: {
        'details': other.data,
        'star_filter': false,
        'good_comment': false,
        'isServer': true
      }
    });
  } else if (pathToRegexp('/entity/details/:id').exec(other.url)) {
    app.model({
      namespace: 'entity_details',
      state: {
        'details': other.data
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
