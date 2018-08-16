import { createMemoryHistory } from 'history';
import { renderToString } from 'react-dom/server';
const Mock = require('mockjs');
import createApp from './createApp';
import renderFullPage from './fullPage';
import { query } from '../src/services/example';

export default function (req, res) {
  if (req.url === '/') {
    const app = createApp({
      history: createMemoryHistory()
    }, {
      url: req.url
    });

    const html = renderToString(app.start()({ context }));
    res.end(renderFullPage(html, ''));
  } else if (req.url === '/user') {

    const data = Mock.mock({
      'data|12': [{
        'id|+1': 1,
        'name': '@cname',
        'info': Mock.Random.cparagraph(),
      }],
      page: {
        total: 100,
        current: 1
      }
    });

    const context = {};

    const app = createApp({
      history: createMemoryHistory()
    }, {
      data: datas,
      url: req.url
    });

    const html = renderToString(app.start()({ context }));
    res.end(renderFullPage(html, data));
  } else {
    res.status(500).end(`Uncaught pathname: ${req.url}`);
  }
}
