
// import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import {
  create_expend, expend_list, update_expend_state, delete_expend,
} from '../Servers/expend';

export default {
  namespace: 'expend',
  state: {
    expendList: [],
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        // /posts
        if (pathname === '/expend_apply_list') {
          dispatch({ type: 'get_expend_list' });
        }
      //   // /posts/:key
      //   const match = pathToRegexp('/posts/:key').exec(pathname);
      //   if (match) {
      //     dispatch({ type: 'fetchPost', payload: match[1] });
      //   }
      });
    },
  },
  reducers: {
    getInvoice(state, { payload }) {
      return {
        ...state, expendList: payload,
      };
    },
  },
  effects: {
    * get_expend_list({ payload }, { call, put }) {
      const data = yield call(expend_list);
      yield put({
        type: 'getInvoice',
        payload: data,
      });
    },
    * create_expend({ payload }, { call, put }) {
      const data = yield call(create_expend, payload);
      console.log('AAA', data);
      yield put(routerRedux.push('/expend_apply_list'));
    },
    * delete_expend({ payload }, { call, put }) {
      const data = yield call(delete_expend, payload);
      yield put({ type: 'get_expend_list' });
    },
    * update_state({ payload }, { call, put }) {
      const data = yield call(update_expend_state, payload);
      yield put({ type: 'get_expend_list' });
    },
  },
};
