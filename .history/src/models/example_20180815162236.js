import { query } from '../services/example';

export default {
  namespace: 'example',
  state: {},
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      const response = query();

      console.log(response)
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
