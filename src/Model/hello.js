
import { asyncName } from '../Servers/hello';

export default {
  namespace: 'hello',
  state: {
    name: 'lidanqiu',
  },
  reducers: {
    saveName(state, { payload: name }) {
      return { ...state, name };
    },
  },
  effects: {
    * fetchName({ payload }, { call, put }) {
      const data = yield call(asyncName);
      yield put({
        type: 'saveName',
        payload: data.name,
      });
    },
  },
};
