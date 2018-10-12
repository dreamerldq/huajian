
// import pathToRegexp from 'path-to-regexp';
import {
  expend_apply, expend_apply_list,
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
    * get_expend_list({ payload }, { call, put }) {
      const data = yield call(expend_apply_list);
      yield put({
        type: 'getInvoice',
        payload: data,
      });
    },
    * create_expend({ payload }, { call, put }) {
      const data = yield call(expend_apply, payload);
    },
    // * delete_voice({ payload }, { call, put }) {
    //   const data = yield call(delete_invoice, payload);
    // },
    // * update_state({ payload }, { call, put }) {
    //   const data = yield call(update_state, payload);
    // },
  },
};
