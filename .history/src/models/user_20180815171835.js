import { query } from '../services/example';

export default {
  namespace: 'user',
  state: {
    'data': false
  },
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const response = yield call(query);

      console.log(response)
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
