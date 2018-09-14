
// import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import { checked_login, create_user } from '../Servers/user';

export default {
  namespace: 'user',
  state: {

  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        // /posts
        if (pathname === '/apply_invoice_list') {
          dispatch({ type: 'get_invoice' });
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
        ...state, invoices: payload,
      };
    },
  },
  effects: {
    * checked_login({ payload }, { call, put }) {
      const { data, status } = yield call(checked_login, payload);
      console.log('AAAA', data, status);
    },
    * create_user({ payload }, { call, put }) {
      console.log('上传的值', payload);
      const { status, data } = yield call(create_user, payload);
      if (status === 'success') { yield put(routerRedux.push('/login')); }
    },
  },
};
