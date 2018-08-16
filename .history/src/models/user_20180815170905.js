import { query } from '../services/example';

export default {
  namespace: 'user',
  state: {
    'data': false
  },
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const response = yield put(query);

      console.log(response)
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
