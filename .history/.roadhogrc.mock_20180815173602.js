const Mock = require('mockjs');

export default {
  'GET /api/users': (req, res) => {
    const data = Mock.mock({
      'data|12': [{
        'id|+1': 1,
        name: '@cname',
        info: Mock.Random.string(10, 30),
        'avator': Mock.Random.image()
      }],
      page: {
        total: 100,
        current: 1
      }
    });

    res.json({
      success: true,
      data: data.data,
      page: data.page
    });
  }
};
