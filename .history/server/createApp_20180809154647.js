import React from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';
import { Route, StaticRouter } from 'dva/router';
import pathToRegexp from 'path-to-regexp';
import { translationMessages } from '../src/utils/i18n';
import { userNavLanguage } from '../src/utils';
// import IndexPage from '../src/routes/home';
// import GoodDetails from '../src/routes/goods/details';
import LoadingIcon from '../src/components/Loading/icon';
import LanguageProvider from '../src/components/LanguageProvider';

// const routes = (
//   <div>
//     <Route path="/" exact component={IndexPage} />
//     <Route path="/goods/details/:id" exact component={GoodDetails} />
//   </div>
// );
const routes = (
  <div>
    <LoadingIcon height="100vh" />
  </div>
);
export default function createApp(opts, other) {

  const app = dva({
    ...opts,
    ...createLoading({
      'effects': true
    })
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

  returnRoute();

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

async function returnRoute() {
  await require('intl');
  await require('intl/locale-data/jsonp/en.js');
  await require('intl/locale-data/jsonp/zh.js');
  await require('intl/locale-data/jsonp/th.js');
}
