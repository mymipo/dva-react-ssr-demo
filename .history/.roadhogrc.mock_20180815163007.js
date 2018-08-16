const Mock = require('mockjs');

export default {
  'GET /api/users': (req, res) => {
    const data = Mock.mock({
      'data|12': [{
        'id|+1': 1,
        name: '@cname',
        'age|11-99': 1,
        address: '@region'
      }],
      page: {
        total: 12,
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
