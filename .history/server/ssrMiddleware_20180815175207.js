import { createMemoryHistory } from 'history';
import { renderToString } from 'react-dom/server';
import createApp from './createApp';
import renderFullPage from './fullPage';
import { query } from '../src/services/example';
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
  } else {
    res.status(500).end(`Uncaught pathname: ${req.url}`);
  }
}
