import { createMemoryHistory } from 'history';
import { renderToString } from 'react-dom/server';
import pathToRegexp from 'path-to-regexp';
import createApp from './createApp';
import renderFullPage from './fullPage';
import request from '../src/utils/request';
import apiConfig from '../config/api.config';


export default function (req, res) {
  global.navigator = {
    'userAgent': req.headers['user-agent'],
    'language': req.headers["accept-language"]
  };

  // console.log(req.headers.cookie,'dddddd')

  if (req.url === '/') {
    Promise.all(
      [
        request({ 'url': apiConfig.ad.home_banner }),
        request({ 'url': apiConfig.game.list, 'data': { 'order': 'hot' } }),
        request({
          'url': apiConfig.goods.list,
          'data': {
            'order': 'hot',
            'page': 1,
            'page_size': 10
          }
        })
      ]
    ).then((results) => {
      const context = {};
      const data = {
        'top_banner': results[0],
        'popular_games': results[1],
        'sell_goods': results[2]
      };

      const app = createApp({
        history: createMemoryHistory()
      }, {
        data,
        url: req.url
      });

      const html = renderToString(app.start()({ context }));
      res.end(renderFullPage(html, data));
    }).catch((error) => {
      res.status(500).end(JSON.stringify(error));
    });
  } else if (pathToRegexp('/goods/details/:id').exec(req.url)) {
    const id = pathToRegexp('/goods/details/:id').exec(req.url)[1];

    Promise.all([
      request({
        'url': apiConfig.goods.details,
        'data': {
          'goods_id': id
        }
      })
    ]).then((results) => {
      if(results[0].code === __SUCCESS__) {
        const context = {};
        const data = {
          ...results[0].data
        };

        const app = createApp({
          history: createMemoryHistory()
        }, {
            data,
            url: req.url
        });

        const html = renderToString(app.start()({ context }));
        res.end(renderFullPage(html, data));

      } else {
        return Promise.reject(results[0]);
      }
    }).catch((error) => {
      res.status(500).end(JSON.stringify(error));
    });
  } else if (pathToRegexp('/entity/details/:id').exec(req.url)) {
    const id = pathToRegexp('/entity/details/:id').exec(req.url)[1];

    Promise.all([
      request({
        'url': apiConfig.goods.entity_details,
        'data': {
          'goods_id': id
        }
      })
    ]).then((results) => {
      if (results[0].code === __SUCCESS__) {
        const context = {};
        const data = results[0];

        const app = createApp({
          history: createMemoryHistory()
        }, {
            data,
            url: req.url
          });

        const html = renderToString(app.start()({ context }));
        res.end(renderFullPage(html, data));

      } else {
        return Promise.reject(results[0]);
      }
    }).catch((error) => {
      res.status(500).end(JSON.stringify(error));
    });
  } else {
    res.status(500).end(`Uncaught pathname: ${req.url}`);
  }
}
