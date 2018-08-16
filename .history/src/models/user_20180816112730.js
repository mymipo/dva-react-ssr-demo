import { query } from '../services/example';

export default {
  namespace: 'user',
  state: {
    'data': window.__INITIAL_STATE__ ? window.__INITIAL_STATE__ : false
  },
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const response = yield call(query);

      yield put({
        'type': 'save',
        'payload': {
          'data': response.data
        }
      })
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
